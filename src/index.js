// server.js
import express from "express";
import cookieParser from "cookie-parser";
import { connect } from "../config/db.js";
import userRouter from "../routes/userRouter.js";

const app = express();
app.use(express.json());
app.use(cookieParser());

app.use("/api/v1/user", userRouter);

const port = 3000;
connect();

app.get("/", (req, res) => {
  res.send("Hello World!");
});

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`);
});
