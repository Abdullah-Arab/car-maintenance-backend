import { PrismaClient } from '@prisma/client';
const prisma = new PrismaClient();
import bcrypt from 'bcryptjs';

export const createUser = async (email: string,  password: string) => {
  const hashedPassword = await bcrypt.hash(password, 10);
  const username = email.split('@')[0];
  return await prisma.user.create({
    data: {
      email,
      username,
      password: hashedPassword
    }
  });
};

export const findUserByEmail = async (email: string) => {
  return await prisma.user.findUnique({
    where: { email },
  });
};
