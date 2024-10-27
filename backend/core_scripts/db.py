from fastapi import FastAPI
# from motor.motor_asyncio import AsyncIOMotorClient

# app = FastAPI()

# # MongoDB connection string (replace with your URI)
# MONGODB_URI = "mongodb+srv://theotherme365:RaxCrf485PrtzGd8@cluster0.yybax.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0"  # Use your own connection URI
# client = AsyncIOMotorClient(MONGODB_URI)
# db = client['adhyayan']  # Replace with your database name

# @app.get("/")
# async def root():
#     # Just to verify MongoDB connection - count documents in a collection
#     collection = db['projectdata']  # Replace with your collection name
#     document_count = await collection.count_documents({})
    
#     return {"Hello Word"}

app = FastAPI()

