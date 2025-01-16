import express from 'express';
import mongoose from 'mongoose';
import dotenv from 'dotenv';
import { connectDB } from './config/db.js';
import productRoutes from './routes/product.route.js';

dotenv.config();
const MONGOOSE = "mongodb+srv://dbAdmin01:acbrtxoiu89@kj@cluster0.wv6ym.mongodb.net/product?retryWrites=true&w=majority&appName=Cluster0";
const app = express();
const PORT = process.env.PORT || 5000;
//Allow to accept JSON data in the req.body
app.use(express.json());

app.use("/api/products",productRoutes); 

app.listen(PORT, () => {
    connectDB();
    console.log('Server started at http://localhost:' + PORT);
});