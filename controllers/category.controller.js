const Category = require("../models/category.model");
const getAllCategories = (req, res) => {
  Category.findAll((error, results) => {
    if (error) {
      console.error("❌ Erreur lors de la requête SQL:", error.message);
      return res.status(500).send("Erreur serveur");
    }
    res.json(results);
  });
};

const createCategory = (req, res) => {
    const {
        name
    } = req.body;

    Category.create(name, (error, results)=>{
        if (error) {
        console.error("❌ Erreur lors de la requête SQL:", error.message);
        return res.status(500).send("Erreur serveur");
      }
       res.status(201).json({
        name:name 
       })

    })
   
}

const getCategoryById = (req, res) => {
  const {id}= req.params;
  Category.findById(id, (error, results) =>{
    if (error) {
        console.error("❌ Erreur lors de la requête SQL:", error.message);
        return res.status(500).send("Erreur serveur");
      }
       res.status(200).json({
        id: id,
        name:results[0].name
  })
})

}

// Ajouter autres méthodes du CRUD
module.exports = {
  getAllCategories, createCategory, getCategoryById,
};
