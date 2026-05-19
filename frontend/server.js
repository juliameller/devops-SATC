const express = require("express");
const path = require("path");

const app = express();
const PORT = process.env.PORT || 4173;

// endpoint health
app.get("/health", (req, res) => {
  res.status(200).json({
    uptime: process.uptime(),
    message: "OK",
    timestamp: Date.now(),
  });
});

// servir build do React
app.use(express.static(path.join(__dirname, "dist")));

// fallback React SPA
app.get("*", (req, res) => {
  res.sendFile(path.join(__dirname, "dist", "index.html"));
});

app.listen(PORT, "0.0.0.0", () => {
  console.log(`Servidor rodando na porta ${PORT}`);
});