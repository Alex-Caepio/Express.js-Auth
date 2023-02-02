import { Request, Response } from "express";
import { userSchema as User } from "../models/userModel";

export const loginUser = async (req: Request, res: Response) => {
  res.json({
    message: "login user",
  });
};

export const signUpUser = async (req: Request, res: Response) => {
  res.json({
    message: "signup user",
  });
};
