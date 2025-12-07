import express from "express";
import cors from "cors";
import helmet from "helmet";
import authRoutes from "./routes/auth.routes";
import productRoutes from "./routes/product.routes";






const app = express();

app.use("/api/auth", authRoutes);
app.use(cors());
app.use(helmet());
app.use(express.json());
app.use("/api/products", productRoutes);
app.get("/", (req, res) => res.send("API Inventory funcionando"));

export default app;
