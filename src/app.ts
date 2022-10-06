import express from 'express';
import productRoute from './routes/products.route';

const app = express();

app.use(express.json());
app.use(productRoute);

export default app;
