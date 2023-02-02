import express from "express";
import { Request, Response, NextFunction } from "express";
import { loginUser, signUpUser } from "../controllers/userController";

export const router = express.Router();

router.post("/login", () => loginUser);

router.post("/signup", () => signUpUser);
