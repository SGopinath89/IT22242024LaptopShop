import express from "express";
import morgan from "morgan";
import ConnectDB from "./config/db.js";
import dotenv from "dotenv";
import authRoute from "./routes/authRoute.js";
import CategoryRoute from "./routes/CategoryRoute.js";
import ProductRoute from "./routes/ProductRoute.js";
import cors from "cors";

//configure dotenv
dotenv.config();

//REST object
const app = express();

//connect to db
ConnectDB();

//middlewares
app.use(cors());
app.use(express.json());
app.use(morgan("dev"));

//routes
app.use("/authentication", authRoute);
app.use("/category", CategoryRoute);
app.use("/products", ProductRoute);

//REST API
app.get("/", (req, res) => {
  res.send("<h1>Welcome to the GalaxyEra</h1>");
});
const PORT = process.env.PORT || 8000;
app.listen(PORT, () => {
  console.log(`Server is running on port  ${PORT}`);
});
