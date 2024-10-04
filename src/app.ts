import express from 'express';
import userRoutes from './routes/userRoutes';
import vehicleRoutes from './routes/vehicleRoutes';

const app = express();

// Middleware
app.use(express.json());

// Routes
app.use('/users', userRoutes);
app.use('/vehicles', vehicleRoutes);

export default app;
