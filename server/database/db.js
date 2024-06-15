import mongoose from "mongoose";

const DBConnection=(DB_URL)=>{
    try{
        mongoose.connect(DB_URL);
        console.log('Database connected successfully');
    } catch(error){
        console.error('Error while connecting with database',error.message);
    }
}

export default DBConnection;