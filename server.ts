import dotenv from "dotenv";
import express from "express";
import mongoose from "mongoose";
import { Request, Response, NextFunction } from "express";
import { router as userRoutes } from "./routes/user";
import https from "https";
import http from "http";
import fs from "fs";
import path from "path";
dotenv.config();

// express app
const app = express();

// middleware
app.use(express.json());
app.use(
  express.urlencoded({
    extended: true,
  })
);

// var key = fs.readFileSync(path.join(__dirname, "./cert/selfsigned.key"));
// var cert = fs.readFileSync(path.join(__dirname, "./cert/selfsigned.crt"));
// var options = {
//   key: key,
//   cert: cert,
// };

// const httpsServer = https.createServer(options, app);

const httpServer = http.createServer(app);

app.use((req: Request, res: Response, next: NextFunction) => {
  console.log(req.path, req.method);
  next();
});

// routes
app.use("/api/users", userRoutes);

// connect to db

mongoose.set("strictQuery", true);
mongoose
  .connect(process.env.MONGO_URI as string)
  .then(() => {
    // listen for requests
    app.listen(process.env.PORT, () => {
      console.log("connected to db & listening on port", process.env.PORT);
    });
  })
  .catch((error) => {
    console.log(error);
  });
