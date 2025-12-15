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
const createArticle = (req, res) => {
  const { title, content, created_at, updated_at, category_id } = req.body;
  Article.create(
    title,
    content,
    created_at,
    updated_at,
    category_id,
    (error, results) => {
      if (error) {
        console.error("❌ Erreur lors de la requête SQL:", error.message);
        return res.status(500).send("Erreur serveur");
      }
      res.status(201).json({
        id: results.insertId,
        title: title,
        content: content,
        created_at: created_at,
        updated_at: updated_at,
        category_id: category_id,
      });
    }
  );
};

const updateArticle = (req, res) => {
  const { id } = req.params;
  const { title, content, created_at, updated_at, category_id } = req.body;
  Article.update(
    title,
    content,
    created_at,
    updated_at,
    category_id,
    id,
    (error, results) => {
      if (error) {
        console.error("❌ Erreur lors de la requête SQL:", error.message);
        return res.status(500).send("Erreur serveur");
      }
      if (results.affectedRows === 0) {
        return res.status(404).send("article non modifiée");
      }
      res.json({
        id: parseInt(id),
        title: title,
        content: content,
        created_at: created_at,
        updated_at: updated_at,
        category_id: category_id,
      });
    }
  );
};

const deleteArticle = (req, res) => {
  const { id } = req.params;
  Article.deletes(id, (error, results) => {
    if (error) {
      console.error("❌ Erreur lors de la requête SQL:", error.message);
      return res.status(500).send("Erreur serveur");
    }
    if (results.affectedRows === 0) {
      return res.status(404).send("article non supprimée");
    }
    res.status(204).send();
  });
};

module.exports = {
  getAllArticles,
  getArticleById,
  createArticle,
  updateArticle,
  deleteArticle,
};
