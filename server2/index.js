require("dotenv").config();
const express = require("express");
const db = require("./db");
const userRouter = require("./src/routes/user_router");
const tokenRouter = require("./src/routes/token_router");
const boardRouter = require("./src/routes/board_router");
const storeRouter = require("./src/routes/store_router");
const app = express();
const { PORT = 9500 } = process.env;
const cors = require("cors");

db();
app.use(express.urlencoded({ extended: false }));
app.use(express.json());
app.use(cors());

app.use("/user", userRouter);
app.use("/token", tokenRouter);
app.use("/board", boardRouter);
app.use("/store", storeRouter);

app.use("/", (req, res) => {
  res.json({ test: "main" });
});

app.listen(PORT, () => {
  console.log(`Example app listening on port ${PORT}`);
});
