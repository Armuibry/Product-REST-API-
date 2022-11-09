import express from 'express';
import cors from 'cors';
import productRoutes from './routes/routes.js'

const app = express();

const PORT = process.env.PORT || 5000;

app.use(cors());
app.use(express.json());
app.use((req,res,next) => {
    res.header('Access-Control-Allow-Origin','*');
    res.header('Access-Control-Allow-Headers')
    next();
});

app.use('/product/api',productRoutes);


app.listen(PORT,()=>{
    console.log(`Server running on port no : ${PORT}`);
})