import os
import io
import fitz  # PyMuPDF
import cv2  # OpenCV for contour detection in images
import numpy as np
from PIL import Image
from pptx import Presentation
from docx import Document
from fastapi import FastAPI, UploadFile, File
from fastapi.responses import JSONResponse
import google.generativeai as genai
from dotenv import load_dotenv  # Import dotenv to load environment variables

# Load environment variables from .env file
load_dotenv()

app = FastAPI()

# Ensure your API key is correctly set in your environment variables
genai.configure(api_key=os.getenv("YOUR_API_KEY_HERE"))  # Use the correct environment variable name

# Function to extract text from PDF
def extract_text_from_pdf(pdf_path):
    doc = fitz.open(pdf_path)
    text = ""
    for page_num in range(len(doc)):
        page = doc.load_page(page_num)
        text += page.get_text()
    return text

# Function to extract images from PDF
def extract_images_from_pdf(pdf_path):
    doc = fitz.open(pdf_path)
    image_paths = []
    for page_num in range(len(doc)):
        page = doc.load_page(page_num)
        images = page.get_images(full=True)
        
        for img_index, img in enumerate(images):
            xref = img[0]
            base_image = doc.extract_image(xref)
            image_bytes = base_image["image"]
            img_ext = base_image["ext"]
            image = Image.open(io.BytesIO(image_bytes))
            
            image_path = f"pdf_image_{page_num + 1}_{img_index + 1}.{img_ext}"
            image.save(image_path)
            image_paths.append(image_path)
    return image_paths

# Function to extract text from PPT
def extract_text_from_ppt(ppt_path):
    prs = Presentation(ppt_path)
    text = ""
    for slide in prs.slides:
        for shape in slide.shapes:
            if hasattr(shape, "text"):
                text += shape.text
    return text

# Function to extract images from PPT
def extract_images_from_ppt(ppt_path):
    prs = Presentation(ppt_path)
    image_paths = []
    for slide_num, slide in enumerate(prs.slides):
        for shape in slide.shapes:
            if hasattr(shape, "image"):
                image = shape.image
                img_bytes = io.BytesIO(image.blob)
                img = Image.open(img_bytes)
                img_ext = image.ext
                image_path = f"ppt_image_{slide_num + 1}_{len(image_paths) + 1}.{img_ext}"
                img.save(image_path)
                image_paths.append(image_path)
    return image_paths

# Function to extract text from DOCX
def extract_text_from_docx(docx_path):
    doc = Document(docx_path)
    text = ""
    for para in doc.paragraphs:
        text += para.text
    return text

# Function to extract images from DOCX
def extract_images_from_docx(docx_path):
    doc = Document(docx_path)
    image_paths = []
    for rel in doc.part.rels.values():
        if "image" in rel.target_ref:
            img = rel.target_part.blob
            img_ext = rel.target_ref.split(".")[-1]
            img_name = f"docx_image_{len(image_paths) + 1}.{img_ext}"
            with open(img_name, "wb") as f:
                f.write(img)
            image_paths.append(img_name)
    return image_paths

# Function to detect contours in images
def detect_contours_in_image(image_path):
    image = cv2.imread(image_path)
    gray = cv2.cvtColor(image, cv2.COLOR_BGR2GRAY)
    blurred = cv2.GaussianBlur(gray, (5, 5), 0)
    edges = cv2.Canny(blurred, 50, 150)

    contours, _ = cv2.findContours(edges, cv2.RETR_EXTERNAL, cv2.CHAIN_APPROX_SIMPLE)
    
    # Simply return the count of contours found without cropping
    return len(contours)

# Function to generate questions using Gemini with options for quiz or flashcard
def generate_questions_from_text(extracted_text, question_type="quiz"):
    model = genai.GenerativeModel("gemini-pro")
    subject_prompt="Which subject does this text belong to ? answer in just one word, only answer the subject name"
    init_prompt=extracted_text+subject_prompt
    init_response=model.generate_content(init_prompt)

    if question_type == "quiz":
        # For quiz, generate multiple-choice questions (MCQs)
        prompt = (
            f"Assume you are a {init_response} teacher. Based on the following text, generate three multiple-choice questions (MCQs) (1 easy question , 1 medium question and 1 hard question , so total three questions) with four answer choices each.The questions can be of any type link fill in the blanks , true false, or any other type, depending on what type suits the subject. Not just true or false or fill in the blanks , you can give any kind of questions but should have options to choose "
            "Also indicate the correct answer:\n\n"
        )
    else:
        # For flashcards, generate open-ended questions
        prompt = (
            f"Assume you are a {init_response} teacher. Based on the following text, generate three questions (1 easy question , 1 medium question and 1 hard question , so total three questions) . The questions can be of any type link fill in the blanks , true false, or any other type, depending on what type suits the subject. Not just true or false or fill in the blanks , you can give any kind of questions"
            "Also provide the correct answer:\n\n"
        )

    full_prompt = prompt + extracted_text
    response = model.generate_content(full_prompt)
    
    return response.text

# Main function to process documents
def process_document(file_path):
    _, file_extension = os.path.splitext(file_path)
    file_extension = file_extension.lower()

    extracted_text = ""
    image_paths = []

    # Based on the file extension, call the appropriate functions
    if file_extension == ".pdf":
        extracted_text = extract_text_from_pdf(file_path)
        image_paths = extract_images_from_pdf(file_path)

    elif file_extension == ".pptx":
        extracted_text = extract_text_from_ppt(file_path)
        image_paths = extract_images_from_ppt(file_path)

    elif file_extension == ".docx":
        extracted_text = extract_text_from_docx(file_path)
        image_paths = extract_images_from_docx(file_path)

    elif file_extension in [".png", ".jpg", ".jpeg"]:
        # Directly send image to Gemini; you may need a separate image processing function
        return generate_questions_from_text("Image received, no text extracted.")
    
    else:
        raise ValueError("Unsupported file format!")

    # Detect contours in all extracted images (optional)
    for image_path in image_paths:
        detect_contours_in_image(image_path)

    return extracted_text

# FastAPI endpoint to upload files
@app.post("/upload/")
async def upload_file(file: UploadFile = File(...)):
    file_location = f"temp/{file.filename}"
    os.makedirs("temp", exist_ok=True)
    with open(file_location, "wb") as f:
        f.write(await file.read())

    try:
        extracted_text = process_document(file_location)
        return JSONResponse(content={"extracted_text": extracted_text})

    except Exception as e:
        return JSONResponse(content={"error": str(e)}, status_code=400)
    finally:
        os.remove(file_location)

# Endpoint for quiz
@app.post("/upload/quiz/")
async def upload_quiz(file: UploadFile = File(...)):
    file_location = f"temp/{file.filename}"
    os.makedirs("temp", exist_ok=True)
    with open(file_location, "wb") as f:
        f.write(await file.read())

    try:
        extracted_text = process_document(file_location)
        questions = generate_questions_from_text(extracted_text, question_type="quiz")
        return JSONResponse(content={"quiz_questions": questions})

    except Exception as e:
        return JSONResponse(content={"error": str(e)}, status_code=400)
    finally:
        os.remove(file_location)

# Endpoint for flashcard
@app.post("/upload/flashcard/")
async def upload_flashcard(file: UploadFile = File(...)):
    file_location = f"temp/{file.filename}"
    os.makedirs("temp", exist_ok=True)
    with open(file_location, "wb") as f:
        f.write(await file.read())

    try:
        extracted_text = process_document(file_location)
        questions = generate_questions_from_text(extracted_text, question_type="flashcard")
        return JSONResponse(content={"flashcard_questions": questions})

    except Exception as e:
        return JSONResponse(content={"error": str(e)}, status_code=400)
    finally:
        os.remove(file_location)

# Run the application
if __name__ == "__main__":
    import uvicorn
    uvicorn.run(app, host="127.0.0.1", port=8000)
