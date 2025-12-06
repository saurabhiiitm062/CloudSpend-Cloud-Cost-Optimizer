import mongoose from "mongoose";

const anomalyLogSchema = new mongoose.Schema(
  {
    date: { type: Date, required: true },
    provider: { type: String, enum: ["aws", "azure"], required: true },
    service: { type: String, required: true },
    observedCost: { type: Number, required: true },
    expectedCost: { type: Number, required: true },
    severity: { type: String, enum: ["low", "medium", "high"], default: "low" }
  },
  { timestamps: true }
);

export const AnomalyLog = mongoose.model("AnomalyLog", anomalyLogSchema);
