from fastapi import FastAPI, HTTPException
from pydantic import BaseModel, EmailStr
from motor.motor_asyncio import AsyncIOMotorClient
from bson import ObjectId
import os
from dotenv import load_dotenv

# Initialize FastAPI app
app = FastAPI()

# Load environment variables from .env file
load_dotenv()

# Get MongoDB URL from environment variables
MONGODB_URL = os.getenv("MONGODB_URL")
if not MONGODB_URL:
    raise Exception("MONGODB_URL environment variable is not set")

# Initialize MongoDB client and select database/collection
client = AsyncIOMotorClient(MONGODB_URL)
db = client['ADHYAYAN']  # Replace 'ADHYAYAN' with your actual database name
users_collection = db['data']  # Replace 'data' with the correct collection name

# Pydantic model for user data
class User(BaseModel):
    name: str
    email: EmailStr

# Utility function to convert BSON to a JSON serializable format
def user_helper(user) -> dict:
    return {
        "id": str(user["_id"]),
        "name": user["name"],
        "email": user["email"]
    }

# POST endpoint to create a new user
@app.post("/users/", response_model=dict)
async def create_user(user: User):
    user_data = user.dict()

    # Check if email already exists in the collection
    existing_user = await users_collection.find_one({"email": user_data["email"]})
    if existing_user:
        raise HTTPException(status_code=400, detail="Email already registered")

    # Insert the new user into the collection
    result = await users_collection.insert_one(user_data)
    new_user = await users_collection.find_one({"_id": result.inserted_id})

    # Return the new user data
    return user_helper(new_user)

# Run the application using Uvicorn
if __name__ == "__main__":
    import uvicorn
    uvicorn.run(app, host="0.0.0.0", port=8000)
