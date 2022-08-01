import express from 'express';
import mongoose from 'mongoose';
import cors from 'cors';
import productRouter from './routers/products';
import authRouter from './routers/auth';
import categoryRouter from './routers/categories';
const app = express();


app.use(express.json());
app.use(cors()); 

// Routing
app.get('/', (req, res) => {
    res.send("<h1>Home Page</h1>");
});

app.use('/api', productRouter);
app.use('/api', authRouter);
app.use('/api', categoryRouter);


mongoose.connect("mongodb://localhost:27017/nextjs")
    .then(() => console.log("Connect db thanh cong"))
// Content
const PORT = 8000
app.listen(PORT, () => {
    console.log(`Server running port ${PORT}`);
})
