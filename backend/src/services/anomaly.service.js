import axios from "axios";
import { AnomalyLog } from "../models/AnomalyLog.js";

const ML_URL = process.env.ML_URL || "http://ml-engine:8000";

export const detectAnomalies = async () => {
  // In real system, you'd pass historical cost timeseries.
  const { data } = await axios.get(`${ML_URL}/anomaly/sample`);
  const log = await AnomalyLog.create({
    date: new Date(),
    provider: data.provider,
    service: data.service,
    observedCost: data.observedCost,
    expectedCost: data.expectedCost,
    severity: data.severity
  });
  return log;
};

export const listAnomalies = () => AnomalyLog.find().sort({ createdAt: -1 }).limit(20);
