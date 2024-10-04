import { Request, Response } from 'express';
import { PrismaClient } from '@prisma/client';

const prisma = new PrismaClient();

// Create a new user
export const createUser = async (req: Request, res: Response) => {
  const { username, email, password } = req.body;
  try {
    const user = await prisma.user.create({
      data: { username, email, password }
    });
    res.status(201).json(user);
  } catch (error) {
    res.status(400).json({ error: 'User already exists or invalid data' });
  }
};

// Get all users
export const getAllUsers = async (req: Request, res: Response) => {
  const users = await prisma.user.findMany();
  res.status(200).json(users);
};
