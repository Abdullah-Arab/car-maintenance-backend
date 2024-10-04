import { Router } from 'express';
import { createVehicle, getAllVehicles } from '../controllers/vehicleController';
import { authMiddleware } from '../middleware/authMiddleware';

const router = Router();

// Routes for Vehicles
router.post('/',authMiddleware,createVehicle);
router.get('/', getAllVehicles);

export default router;
