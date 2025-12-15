const Article = require("../models/article.model");

const getAllArticles = (req, res) => {
  Article.findAll((error, results) => {
    if (error) {
      console.error("❌ Erreur lors de la requête SQL:", error.message);
      return res.status(500).send("Erreur serveur");
    }
    res.json(results);
  });
};

const getArticleById = (req, res) => {
  const { id } = req.params;
  Article.finById(id, (error, results) => {
    if (error) {
      console.error("❌ Erreur lors de la requête SQL:", error.message);
      return res.status(500).send("Erreur serveur");
    }
    if (results.length === 0) {
      return res.status(404).send("article non trouvée");
    }
    res.json(results[0]);
  });
};

module.exports = {
  getAllArticles,
  getArticleById,
};
