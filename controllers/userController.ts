import { Request, Response, NextFunction } from "express";
import express from "express";
import bcrypt from "bcrypt";
import jwt from "jsonwebtoken";
import { User } from "../models/userModel";
import dotenv from "dotenv";
import fs from "fs";

dotenv.config();

export const loginUser = async (req: Request, res: Response) => {
  const key = fs.readFileSync("./config/private.pem", {
    encoding: "utf8",
  });

  const userExists = await User.findOne({ email: req.body.email });
  if (userExists) {
    const validPassword = await bcrypt.compare(
      req.body.password,
      userExists.password
    );
    if (validPassword) {
      const token = jwt.sign(
        { _id: userExists._id, email: userExists.email, role: userExists.role },
        key as string,
        { algorithm: "RS256", expiresIn: 60 * 60 }
      );
      res.status(200).json({
        message: "User logged in",
        token: `Bearer ${token}`,
      });
    } else {
      res.status(401).json({
        message: "Invalid password",
      });
    }
  } else {
    res.status(404).json({
      message: "User not found",
    });
  }
};

export const logoutUser = async (req: Request, res: Response) => {
  const token = req.headers["authorization"];

  res.status(200).json({
    message: "User logged out",
  });
};

export const authenticateToken = (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  const authHeader = req.headers["authorization"];
  const token = authHeader && authHeader.split(" ")[1];
  //const token = req.body.token;
  if (token == null) {
    return res.sendStatus(401);
  }
  const key = fs.readFileSync("./config/public.pem", {
    encoding: "utf8",
  });
  // const key = "Hello";
  const userVerify = jwt.verify(
    token,
    key,
    { algorithms: ["RS256"] },
    (err, user) => {
      if (err) {
        return res.sendStatus(403);
      }
      res.json({
        message: "jwt user",
        user,
      });
    }
  );
};
