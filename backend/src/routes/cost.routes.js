import { Router } from "express";
import { getCostSummary, seedDummyCosts } from "../controllers/cost.controller.js";

const router = Router();

router.get("/summary", getCostSummary);
router.post("/seed", seedDummyCosts);

export default router;
