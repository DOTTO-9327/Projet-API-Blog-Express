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

const deleteLike = (req, res) =>{
    const { article_id } = req.params;
    const {user_id}= req.body;
    Like.remove(user_id, article_id, (error, results) => {
        if (error) {
            console.error("erreur de la requète SQL", error.message)
            return res.status(500).send("erreur serveur")
        }
        if (results.affectedRows === 0) {
            return res.status(404).json({ message: "Like not found" });
        }

    res.status(204).send()
        
    }) 
}
module.exports = { createLike, deleteLike };