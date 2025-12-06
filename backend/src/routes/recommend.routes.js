import { Router } from "express";
import { listRecommendations } from "../controllers/recommend.controller.js";

const router = Router();

router.get("/", listRecommendations);

export default router;
