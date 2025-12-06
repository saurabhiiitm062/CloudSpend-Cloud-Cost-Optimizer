import { detectAnomalies, listAnomalies } from "../services/anomaly.service.js";

export const triggerAnomalyDetection = async (req, res) => {
  try {
    const log = await detectAnomalies();
    res.json({ success: true, data: log });
  } catch (err) {
    res.status(500).json({ success: false, message: err.message });
  }
};

export const getAnomalies = async (req, res) => {
  try {
    const logs = await listAnomalies();
    res.json({ success: true, data: logs });
  } catch (err) {
    res.status(500).json({ success: false, message: err.message });
  }
};
