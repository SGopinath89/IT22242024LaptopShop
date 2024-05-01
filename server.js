import express from "express";
import morgan from "morgan";
import ConnectDB from "./config/db.js";
import dotenv from "dotenv";
import authRoute from "./routes/authRoute.js";

//configure dotenv
dotenv.config();

//REST object
const app = express();

//connect to db
ConnectDB();

//middlewares
app.use(express.json());
app.use(morgan("dev"));

//routes
app.use("/authentication", authRoute);

//REST API
app.get("/", (req, res) => {
  res.send("<h1>Welcome to the GalaxyEra</h1>");
});
const PORT = process.env.PORT || 8000;
app.listen(PORT, () => {
  console.log(`Server is running on port  ${PORT}`);
});
