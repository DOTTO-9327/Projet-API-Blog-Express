require("./config/database");
const express = require("express");
const app = express();
// Middleware pour lire le JSON
const likeRoutes = require("./routes/like.routes");
const userRoutes = require("./routes/user.routes");
const articleRoutes = require("./routes/article.routes");
const categoryRouter = require("./routes/category.routes");

app.use(express.json());

app.use("/like", likeRoutes);
app.use("/user", userRoutes);
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
