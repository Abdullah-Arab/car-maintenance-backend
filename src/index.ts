import express from 'express';
import { PrismaClient } from '@prisma/client';

const app = express();
const prisma = new PrismaClient();
app.use(express.json());

// Routes
app.get('/', (req, res) => {
  res.send('Car Tracker API is running!');
});

// Example route to create a user
app.post('/users', async (req, res) => {
  const { username, email, password } = req.body;
  try {
    const user = await prisma.user.create({
      data: { username, email, password }
    });
    res.json(user);
  } catch (error) {
    res.status(400).json({ error: "User already exists" });
  }
});

const port = process.env.PORT || 3000;
app.listen(port, () => {
  console.log(`Server running on http://localhost:${port}`);
});
