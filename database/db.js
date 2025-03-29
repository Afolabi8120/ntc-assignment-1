import mongoose from 'mongoose';
import dotenv from 'dotenv';
dotenv.config();

const DB_URI = process.env.DB_URI;

if(!DB_URI) {
    throw new Error('Please define the MONGODB_URI environment variable');
}

export const connectToDatabase = async () => {
    try {
        await mongoose.connect(DB_URI);
        console.log(`Connected to database`);
    }catch (error) {
        console.error('Error connecting to databse: ', error);
        process.exit(1);
    }
}

