// Placeholder RAG handler – here we just echo a canned response.
// Later you can integrate LangChain + vector DB.

export const askRag = async (req, res) => {
  const { query } = req.body;
  if (!query) {
    return res.status(400).json({ success: false, message: "query is required" });
  }

  const answer = `This is a demo answer for: "${query}". Later this will be powered by a RAG pipeline over cloud cost documentation.`;

  res.json({
    success: true,
    data: {
      query,
      answer,
      sources: []
    }
  });
};
