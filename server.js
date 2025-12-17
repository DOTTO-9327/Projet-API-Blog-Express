require("./config/database");
const express = require("express");
const app = express();
// Middleware pour lire le JSON
app.use(express.json());
const likeRoutes = require("./routes/like.routes");
app.use("/like", likeRoutes);
app.use("/like/:user_id/:article_id", likeRoutes);

const userRoutes = require("./routes/user.routes");
app.use("/user", userRoutes);
const articleRoutes = require("./routes/article.routes");
app.use("/article", articleRoutes);
const categoryRouter = require("./routes/category.routes");
app.use("/categories", categoryRouter);
app.get("/health", (req, res) => {
  res.json({ status: "ok" });
});

// Démarrage du serveur
const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});
