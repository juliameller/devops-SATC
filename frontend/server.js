import express from "express";
import path from "path";
import { fileURLToPath } from "url";

const app = express();
const PORT = process.env.PORT || 4173;

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

// Health endpoint
app.get("/health", (req, res) => {
  res.status(200).json({
    uptime: process.uptime(),
    message: "OK",
    timestamp: Date.now(),
  });
});

// Arquivos do React buildado
app.use(express.static(path.join(__dirname, "dist")));

// Fallback para React Router / SPA
app.get(/.*/, (req, res) => {
  res.sendFile(path.join(__dirname, "dist", "index.html"));
});

app.listen(PORT, "0.0.0.0", () => {
  console.log(`Servidor rodando na porta ${PORT}`);
});