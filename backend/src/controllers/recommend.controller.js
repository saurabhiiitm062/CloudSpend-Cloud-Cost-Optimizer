import { getRecommendations } from "../services/recommendation.service.js";

export const listRecommendations = async (req, res) => {
  try {
    const items = await getRecommendations();
    res.json({ success: true, data: items });
  } catch (err) {
    res.status(500).json({ success: false, message: err.message });
  }
};
