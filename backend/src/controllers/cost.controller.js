import { CostRecord } from "../models/CostRecord.js";

export const getCostSummary = async (req, res) => {
  try {
    const docs = await CostRecord.find().sort({ date: 1 }).limit(50);
    res.json({ success: true, data: docs });
  } catch (err) {
    res.status(500).json({ success: false, message: err.message });
  }
};

export const seedDummyCosts = async (req, res) => {
  try {
    await CostRecord.deleteMany({});
    const today = new Date();
    const docs = [];
    for (let i = 14; i >= 0; i--) {
      const d = new Date(today);
      d.setDate(d.getDate() - i);
      docs.push(
        { provider: "aws", service: "EC2", date: d, cost: 5 + Math.random() * 3 },
        { provider: "aws", service: "S3", date: d, cost: 1 + Math.random() * 1 },
        { provider: "azure", service: "VM", date: d, cost: 4 + Math.random() * 2 }
      );
    }
    await CostRecord.insertMany(docs);
    res.json({ success: true, inserted: docs.length });
  } catch (err) {
    res.status(500).json({ success: false, message: err.message });
  }
};
