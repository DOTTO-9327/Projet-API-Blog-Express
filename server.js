require("dotenv").config();
const express = require("express");
const app = express();
const articleRoutes = require("./routes/article.routes");
require("./config/database");
const categoryRouter = require("./routes/category.routes")
// Middleware pour lire le JSON
app.use(express.json());

app.use("/article", articleRoutes);
app.use("/categories", categoryRouter);

// Route de test
app.get("/health", (req, res) => {
  res.json({ status: "ok" });
});

// Démarrage du serveur
const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});
