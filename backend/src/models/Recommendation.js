import mongoose from "mongoose";

const recommendationSchema = new mongoose.Schema(
  {
    provider: { type: String, enum: ["aws", "azure"], required: true },
    resourceId: { type: String },
    title: { type: String, required: true },
    description: { type: String, required: true },
    estimatedMonthlySavings: { type: Number, default: 0 },
    status: { type: String, enum: ["pending", "accepted", "rejected"], default: "pending" }
  },
  { timestamps: true }
);

export const Recommendation = mongoose.model("Recommendation", recommendationSchema);
