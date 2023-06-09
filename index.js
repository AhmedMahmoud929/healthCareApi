require("dotenv").config();
const express = require("express");
const app = express();
const mongoose = require("mongoose");
const cors = require("cors");
const PORT = process.env.PORT | 2611;
const authRouter = require("./routers/auth.router.js");
const usersRouter = require("./routers/users.router.js");
const exerciseRouter = require("./routers/exercises.router.js");
const tasksRouter = require("./routers/tasks.router.js");

// Middlwares
app.use(express.json());
app.use(cors());

// Routes
app.use("/api/auth", authRouter);
app.use("/api/users", usersRouter);
app.use("/api/exercises", exerciseRouter);
app.use("/api/tasks", tasksRouter);

// API => www.remove.bg/api/

// Database Connection
mongoose.set("strictQuery", false);
mongoose
  .connect(process.env.DB_URL, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  })
  .then(() => console.log("DB Connected"))
  .catch((err) => console.log(err));

// Server Listen
app.listen(PORT, () => console.log("http://localhost:" + PORT));
