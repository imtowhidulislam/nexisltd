import express from "express";
import { findAll,singleUser,createUser,updateUser,deleteUser, registerUser } from "../controllers/userController.js";

const userRoutes = express.Router();

userRoutes.get("/",findAll);
userRoutes.get("/:Id",singleUser);
userRoutes.post("/create",createUser);
userRoutes.patch("/:Id",updateUser);
userRoutes.delete("/:Id",deleteUser);
userRoutes.post("/register",registerUser);

export default userRoutes;