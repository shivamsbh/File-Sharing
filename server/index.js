import express from 'express';
import router from './routes/routes.js';
import cors from 'cors';
import DBConnection from './database/db.js';
import * as dotenv from "dotenv"
dotenv.config();

const DB_URL=process.env.DB_URL;

const app=express();

app.use(cors());
app.use('/',router);

const PORT=process.env.PORT || 8000;

DBConnection(DB_URL);

app.listen(PORT, ()=>console.log(`Server is running on port ${PORT}`));