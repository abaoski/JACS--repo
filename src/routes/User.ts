import { Router } from "express";
import { getRepository } from "typeorm";
import { User } from "../entities/User";

const router = Router();

router.post("/users", async (req, res) => {
    const userRepository = getRepository(User);
    const { name, email } = req.body;

    const newUser = userRepository.create({ name, email });
    await userRepository.save(newUser);
    return res.status(201).json(newUser);
});

export default router;
