import mongoose from 'mongoose';

const MONGODB_URI = process.env.MONGODB_URL || 'mongodb://admin:adminpassword@aiot-mongodb:27017/myapp_db?authSource=admin';

export async function connectToMongoDB(): Promise<void> {
  try {
    await mongoose.connect(MONGODB_URI);
    console.log('✅ Connected to MongoDB successfully');
  } catch (error) {
    console.error('❌ MongoDB connection error:', error);
    throw error;
  }
}

export default mongoose;
