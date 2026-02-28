import mongoose from "mongoose";


export async function connectDB() {
    try {
        mongoose.connect(process.env.MONGO_URI!);
        const connection = mongoose.connection;

        connection.on('connected',()=>{
            console.log('Connected to MongoDB Successfully');
        });
        connection.on('error',(error)=>{
            console.log('MongoDB connection error. Please make sure MongoDB is running.',error);
            process.exit();
        });
    } catch (error) {
        console.log('Something went wrong in DB connection',error);
    }
    
} 