import "reflect-metadata";
import express from "express";
import { createConnection } from "typeorm";
import userRoutes from "./routes/user";

const app = express();
app.use(express.json());

createConnection()
    .then(() => {
        console.log("Database connected");
        app.use("/api", userRoutes);

        app.listen(3000, () => {
            console.log("Server running on port 3000");
        });
    })
    .catch((error) => console.log("Database connection error:", error));
