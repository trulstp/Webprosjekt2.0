const express = require("express");
const app = express();
const mongoose = require("mongoose");
const dotenv = require("dotenv");
const cookieParser = require("cookie-parser");
const routesUrls = require("./routes/loginRoutes");
const examRoutes = require("./routes/examRoutes");
const cors = require("cors");
const path = require("path");
const PORT = process.env.PORT || 5000;

dotenv.config();

mongoose.connect(process.env.DATABASE_ACCESS, () => console.log("Database connected"));
app.use(cookieParser());
app.use(express.json());
app.use(cors());
app.use("/app", routesUrls);
app.use("/exam", examRoutes);
app.listen(PORT, () => console.log(`server is up and running on ${PORT}`));
