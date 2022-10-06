import express from 'express';
import productRoute from './routes/products.route';
import userRoute from './routes/users.route';

const app = express();

app.use(express.json());
app.use(productRoute);
app.use(userRoute);

export default app;
