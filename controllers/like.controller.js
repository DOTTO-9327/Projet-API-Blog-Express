const Like = require("../models/like.model");
const createLike = (req, res) => {
    const { user_id, article_id } = req.body;
    Like.create(user_id, article_id, (error, results) => {
        if (error) {            
            console.error("erreur de la requète SQL", error.message)
            return res.status(500).send("erreur serveur")
        }
        res.status(201).json({
            user_id: user_id, article_id: article_id
        })
    })
}
module.exports = { createLike };