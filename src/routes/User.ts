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

router.delete("/users/:id", async (req, res) => {
    const userRepository = getRepository(User);
    const { id } = req.params;

    const user = await userRepository.findOne({ where: { id: Number(id) } });
    if (!user) {
        return res.status(404).json({ message: "User not found" });
    }

    await userRepository.remove(user);
    return res.status(200).json({ message: "User deleted successfully" });
});
export default router;
