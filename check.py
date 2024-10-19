from fastapi import FastAPI
from fastapi.responses import FileResponse
from pydantic import BaseModel
from gtts import gTTS
import os

app = FastAPI()

# Define a model for the input data
class TextToSpeechRequest(BaseModel):
    text: str
    language: str = "en"

@app.post("/text-to-speech/")
async def text_to_speech(request: TextToSpeechRequest):
    # Text-to-speech conversion
    tts = gTTS(text=request.text, lang=request.language, slow=False)
    
    # Save the audio file
    audio_file = "output.mp3"
    tts.save(audio_file)
    
    # Serve the file as a response
    return FileResponse(audio_file, media_type="audio/mpeg", filename=audio_file)

# Optional: Endpoint to test if the API is running
@app.get("/")
def read_root():
    return {"message": "Text-to-Speech API is running!"}

if __name__ == "__main__":
    # Run the server
    import uvicorn
    uvicorn.run(app, host="0.0.0.0", port=8000)
