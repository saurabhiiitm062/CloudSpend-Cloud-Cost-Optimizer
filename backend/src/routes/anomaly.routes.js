import { Router } from "express";
import { triggerAnomalyDetection, getAnomalies } from "../controllers/anomaly.controller.js";

const router = Router();

router.post("/run", triggerAnomalyDetection);
router.get("/", getAnomalies);

export default router;
