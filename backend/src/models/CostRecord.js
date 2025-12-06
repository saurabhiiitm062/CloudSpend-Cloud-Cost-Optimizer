import mongoose from "mongoose";

const costRecordSchema = new mongoose.Schema(
  {
    provider: { type: String, enum: ["aws", "azure"], required: true },
    service: { type: String, required: true },
    date: { type: Date, required: true },
    cost: { type: Number, required: true }
  },
  { timestamps: true }
);

export const CostRecord = mongoose.model("CostRecord", costRecordSchema);
