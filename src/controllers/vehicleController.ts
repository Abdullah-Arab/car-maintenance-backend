import { Request, Response } from 'express';
import { PrismaClient } from '@prisma/client';

const prisma = new PrismaClient();

// Create a new vehicle
export const createVehicle = async (req: Request, res: Response) => {
  const { make, model, year, vin, userId } = req.body;
  try {
    const vehicle = await prisma.vehicle.create({
      data: { make, model, year, vin, userId }
    });
    res.status(201).json(vehicle);
  } catch (error) {
    res.status(400).json({ error: 'Error creating vehicle' });
  }
};

// Get all vehicles
export const getAllVehicles = async (req: Request, res: Response) => {
  const vehicles = await prisma.vehicle.findMany();
  res.status(200).json(vehicles);
};
