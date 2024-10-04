import { Router } from 'express';
import { createVehicle, getAllVehicles } from '../controllers/vehicleController';

const router = Router();

// Routes for Vehicles
router.post('/', createVehicle);
router.get('/', getAllVehicles);

export default router;
