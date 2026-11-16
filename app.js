
const express = require("express");
const cors = require("cors");

const app = express();

const logger = require("./middlewares/logger");
const taskRoutes = require("./routes/taskRoutes");

// CORS, route'lardan önce tanımlanmalı!
app.use(cors());

app.use(express.json());
app.use(logger);

const PORT = 3000;

app.use("/api/tasks", taskRoutes);

app.get("/", (req, res) => {
    res.json({ message: "Welcome to TaskFlow API.." });
});

app.listen(PORT, () => {
    console.log(`Server is running on http://localhost:${PORT}`);
});
