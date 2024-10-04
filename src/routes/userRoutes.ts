import { Router } from 'express';
import { createUser, getAllUsers } from '../controllers/userController';

const router = Router();

// Routes for User
router.post('/', createUser);
router.get('/', getAllUsers);

export default router;
