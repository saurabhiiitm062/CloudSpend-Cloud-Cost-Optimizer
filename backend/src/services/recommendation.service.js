import { Recommendation } from "../models/Recommendation.js";

export const getRecommendations = () => {
  return Recommendation.find().sort({ createdAt: -1 }).limit(20);
};

export const seedDummyRecommendations = async () => {
  const count = await Recommendation.countDocuments();
  if (count > 0) return;

  await Recommendation.insertMany([
    {
      provider: "aws",
      resourceId: "i-0123456789",
      title: "Downsize EC2 instance",
      description: "CPU utilization is consistently below 15%. Consider moving from m5.large to t3.medium.",
      estimatedMonthlySavings: 35.5
    },
    {
      provider: "azure",
      resourceId: "vm-abc123",
      title: "Shutdown dev VM at night",
      description: "Instance is idle between 10PM–9AM. Automate shutdown to save cost.",
      estimatedMonthlySavings: 22.1
    }
  ]);
};
