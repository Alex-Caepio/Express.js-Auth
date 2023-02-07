import { Request, Response, NextFunction, Router } from "express";
import passport from "passport";
import express from "express";

import {
  authenticateToken,
  loginUser,
  logoutUser,
} from "../controllers/userController";

const router: Router = Router();
router.post("/login", loginUser);

router.post("/jwtuser", authenticateToken);

router.delete("/logout", logoutUser);

export default router;
