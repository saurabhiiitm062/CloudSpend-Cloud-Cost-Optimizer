import { Router } from "express";
import { askRag } from "../controllers/rag.controller.js";

const router = Router();

router.post("/ask", askRag);

export default router;
