import React, { useEffect, useState } from "react";
import { api } from "./services/api";

const Section = ({ title, children }) => (
  <section style={{ marginBottom: "2rem", padding: "1rem", border: "1px solid #ddd", borderRadius: 8 }}>
    <h2>{title}</h2>
    {children}
  </section>
);

export default function App() {
  const [costs, setCosts] = useState([]);
  const [anomalies, setAnomalies] = useState([]);
  const [recs, setRecs] = useState([]);
  const [ragQuery, setRagQuery] = useState("");
  const [ragAnswer, setRagAnswer] = useState("");

  const loadCosts = async () => {
    await api.post("/cost/seed");
    const { data } = await api.get("/cost/summary");
    setCosts(data.data || []);
  };

  const loadAnomalies = async () => {
    await api.post("/anomaly/run");
    const { data } = await api.get("/anomaly");
    setAnomalies(data.data || []);
  };

  const loadRecs = async () => {
    const { data } = await api.get("/recommendations");
    setRecs(data.data || []);
  };

  const askRag = async (e) => {
    e.preventDefault();
    const { data } = await api.post("/rag/ask", { query: ragQuery });
    setRagAnswer(data.data?.answer || "");
  };

  useEffect(() => {
    loadCosts();
    loadAnomalies();
    loadRecs();
  }, []);

  return (
    <div style={{ maxWidth: 1000, margin: "0 auto", padding: "1.5rem", fontFamily: "system-ui, sans-serif" }}>
      <h1>Cloud Cost Optimizer (Demo)</h1>
      <p style={{ color: "#555" }}>
        Simple demo UI wired to backend + ML service. You can extend this into a full dashboard later.
      </p>

      <Section title="Cost Summary (dummy data)">
        <table width="100%" border="1" cellPadding="6" style={{ borderCollapse: "collapse", fontSize: 14 }}>
          <thead>
            <tr>
              <th>Date</th>
              <th>Provider</th>
              <th>Service</th>
              <th>Cost ($)</th>
            </tr>
          </thead>
          <tbody>
            {costs.map((c) => (
              <tr key={c._id}>
                <td>{new Date(c.date).toLocaleDateString()}</td>
                <td>{c.provider}</td>
                <td>{c.service}</td>
                <td>{c.cost.toFixed(2)}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </Section>

      <Section title="Detected Anomalies">
        {anomalies.length === 0 && <p>No anomalies yet.</p>}
        {anomalies.map((a) => (
          <div key={a._id} style={{ marginBottom: 8 }}>
            <strong>{a.provider.toUpperCase()} - {a.service}</strong>{" "}
            ({a.severity}) — observed: ${a.observedCost.toFixed(2)}, expected: ${a.expectedCost.toFixed(2)}
          </div>
        ))}
        <button onClick={loadAnomalies}>Run Anomaly Detection Again</button>
      </Section>

      <Section title="Cost Optimization Recommendations">
        {recs.length === 0 && <p>No recommendations.</p>}
        {recs.map((r) => (
          <div key={r._id} style={{ marginBottom: 10 }}>
            <strong>{r.title}</strong> [{r.provider.toUpperCase()}]
            <div>{r.description}</div>
            <div>Est. Monthly Savings: ${r.estimatedMonthlySavings.toFixed(2)}</div>
          </div>
        ))}
      </Section>

      <Section title="AI (RAG) Assistant — Demo">
        <form onSubmit={askRag}>
          <input
            value={ragQuery}
            onChange={(e) => setRagQuery(e.target.value)}
            placeholder="Ask about your cloud cost..."
            style={{ width: "70%", padding: 8, marginRight: 8 }}
          />
          <button type="submit">Ask</button>
        </form>
        {ragAnswer && (
          <p style={{ marginTop: 10, padding: 10, background: "#f7f7f7", borderRadius: 6 }}>
            <strong>Answer:</strong> {ragAnswer}
          </p>
        )}
      </Section>
    </div>
  );
}
