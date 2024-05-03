require("dotenv").config();
const express = require("express");
const cors = require("cors");
const todoRouter = require("./router/todo");
const todoAuthRouter = require("./router/todoProtected");
const userRouter = require("./router/user");
const authRouter = require("./router/auth");

const port = process.env.PORT || "3100";
const app = express();

app.use(cors());
app.use(express.json());
// app.use("/v1/todos", todoRouter);
app.use("/v1/todos_auth", todoAuthRouter);
app.use("/v1/users", userRouter);
// app.use("/v1/auth", authRouter);

app.listen(port, () => {
  console.log("Server Connected on PORT: " + port);
});
