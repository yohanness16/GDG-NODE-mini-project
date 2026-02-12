import dotenv from 'dotenv';
dotenv.config();
import express from 'express';
import logger from './lib/logger.js';
import productRoutes from './router/productRoute.js';
import connectMongoDb from './config/dbConfig.js';
import { globalErrorHandler } from './utils/Error.js';



connectMongoDb();
const app = express();


app.use(express.json());
app.use('/products', productRoutes);
app.set('view engine', 'ejs');
app.use(globalErrorHandler)

const port = process.env.PORT || 5000;


app.listen(port, () => {
  logger.info(`Server is running on port ${port}`);
});