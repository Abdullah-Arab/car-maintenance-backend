import express from 'express';
import { check } from 'express-validator';
import { registerUser, loginUser } from '../controllers/authController';

const router = express.Router();

// Register
router.post(
  '/register',
  [
    check('email', 'Please include a valid email').isEmail(),
    check('username', 'Username is required').not().isEmpty(),
    check('password', 'Password must be 6 or more characters').isLength({ min: 6 }),
  ],
  registerUser
);

// Login
router.post(
  '/login',
  [
    check('email', 'Please include a valid email').isEmail(),
    check('password', 'Password is required').exists(),
  ],
  loginUser
);

export default router;
