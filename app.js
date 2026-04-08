require("dotenv").config();

const express = require("express");
const tasksRouter = require("./routes/tasks");
const authRouter = require("./routes/auth");
const cors = require("cors");

const app = express();

app.use(cors());

app.use((express.json()));

app.use("/tasks", tasksRouter);
app.use("/auth", authRouter);

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
  console.log(`Express server running on port ${PORT}`)
})