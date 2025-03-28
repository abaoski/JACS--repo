import express from 'express';
import { User } from '../entities/user';
import { getRepository } from 'typeorm';

const router = express.Router();

router.post('/users', async (req, res) => {
  try {
    const userRepository = getRepository(User);
    const newUser = userRepository.create(req.body);
    await userRepository.save(newUser);
    
    res.status(201).json(newUser);
  } catch (error) {
    res.status(500).json({ message: 'Error creating user' });
  }
});

export default router;
