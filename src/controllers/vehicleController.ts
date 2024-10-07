import { Request, Response } from 'express';
import { PrismaClient } from '@prisma/client';

const prisma = new PrismaClient();

// Create a new vehicle
export const createVehicle = async (req: Request, res: Response) => {
  const { make, model, year, userId } = req.body;
  try {
    const vehicle = await prisma.vehicle.create({
      data: { make, model, year, userId }
    });
    res.status(201).json(vehicle);
  } catch (error) { 
    res.status(400).json({ error: 'Error creating vehicle' });
  }
};


// Get All user vehicles
export const getAllVehicles = async (req: AuthRequest, res: Response) => {
  try {
    // Make sure the user ID exists
    if (!req.userId) {
      return res.status(400).json({ msg: 'User ID is missing' });
    }

    // Retrieve vehicles associated with the user
    const vehicles = await prisma.vehicle.findMany({
      where: {
        userId: req.userId, // Get vehicles where the userId matches
      },
    });

    res.json(vehicles);
  } catch (error) {
    console.error(error);
    res.status(500).json({ msg: 'Server error' });
  }
};