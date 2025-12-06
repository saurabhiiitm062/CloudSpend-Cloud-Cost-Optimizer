import express from "express";
import cors from "cors";
import dotenv from "dotenv";
import { connectDB } from "./config/db.js";
import costRoutes from "./routes/cost.routes.js";
import anomalyRoutes from "./routes/anomaly.routes.js";
import recommendRoutes from "./routes/recommend.routes.js";
import ragRoutes from "./routes/rag.routes.js";
import { seedDummyRecommendations } from "./services/recommendation.service.js";

dotenv.config();

const app = express();
app.use(cors());
app.use(express.json());

const PORT = process.env.PORT || 5000;
const MONGODB_URI = process.env.MONGODB_URI || "mongodb://localhost:27017/cloud_cost_optimizer";

app.get("/", (req, res) => {
  res.json({ message: "Cloud Cost Optimizer Backend running" });
});

app.use("/api/cost", costRoutes);
app.use("/api/anomaly", anomalyRoutes);
app.use("/api/recommendations", recommendRoutes);
app.use("/api/rag", ragRoutes);

const start = async () => {
  await connectDB(MONGODB_URI);
  await seedDummyRecommendations();
  app.listen(PORT, () => {
    console.log(`✅ Backend server running on port ${PORT}`);
  });
};

start().catch((err) => {
  console.error("Failed to start server:", err);
});
