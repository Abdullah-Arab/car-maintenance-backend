import { Request, Response } from 'express';
import bcrypt from 'bcryptjs';
import jwt from 'jsonwebtoken';
import { validationResult } from 'express-validator';
import { createUser, findUserByEmail } from '../models/User';

const JWT_SECRET = process.env.JWT_SECRET || 'your_secret_key';

// Register a new user
export const registerUser = async (req: Request, res: Response) => {
  const errors = validationResult(req);
  if (!errors.isEmpty()) {
     res.status(400).json({ errors: errors.array() });
  }

  const { email,  password } = req.body;

  try {
    const existingUser = await findUserByEmail(email);
    if (existingUser) {
       res.status(400).json({ msg: 'User already exists' });
    }

    const newUser = await createUser(email,  password);

    const token = jwt.sign({ userId: newUser.id }, JWT_SECRET, { expiresIn: '30 days' });

    res.status(201).json({ token });
  } catch (error) {
    res.status(500).json({ msg: 'Server error' });
  }
};

// Login a user
export const loginUser = async (req: Request, res: Response) => {
  const { email, password } = req.body;

  try {
    const user = await findUserByEmail(email);
    if (!user) {
       res.status(400).json({ msg: 'Invalid credentials' });
    }

    const isMatch = await bcrypt.compare(password, user!.password);
    if (!isMatch) {
       res.status(400).json({ msg: 'Invalid credentials' });
    }

    const token = jwt.sign({ userId: user!.id }, JWT_SECRET, { expiresIn: '30 days' });

    res.json({ token });
  } catch (error) {
    res.status(500).json({ msg: 'Server error' });
  }
};
