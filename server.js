const express = require("express");
const app = express();
const articleRoutes = require("./routes/article.routes");
require("./config/database");
const userRoutes = require("./routes/user.routes");
// Middleware pour lire le JSON
app.use(express.json());
app.use("/users", userRoutes);

const categoryRouter = require("./routes/category.routes")

app.use("/article", articleRoutes);
app.use("/categories", categoryRouter);
app.get("/health", (req, res) => {
  res.json({ status: "ok" });
});

// Démarrage du serveur
const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});
