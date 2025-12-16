const User = require("../models/user.model");
const bcrypt = require("bcrypt");
//librairie externe plus sécurisée que l'utilisation {crypto} native d'express une async est necessaire à bcrypt contre des attaques brutes.
//Mot de passe(clair)-> Bcript ->hashé(en db)
const createUser = async (req, res) => {
 //fetch ne rejette catch que pour les erreurs réseau pas pour les code erreur
  const { firstname, lastname, email, password } = req.body;

  console.log(email)

  try{
    // la niveau de compléxité jauge de 10(2^10 1024 itérations) à 12(2^12 pour 4096 ) il équivaut au temps nécéssaire pour générer le hash[100 ms à 300 ms]
    const saltRounds = 10;
    const hashedPassword = await bcrypt.hash(password, saltRounds);
 
    User.create(firstname, lastname, email, hashedPassword, (error, results) => {
   
    if (error) {
      console.error("erreur de la requête sql", error.message);
      return res.status(500).send("error serveur");
    }
    res.status(201).json({
          message: "Utilisateur créé avec succès !",
          id: results.insertId,
          firstname: firstname,
          lastname: lastname,
          email: email,
        
      });
    });
  }
  catch(err) {
  console.error("Error lors du hachage du mot de passe:", err);
  res.status(500).send("Erreur serveur interne.");
   }
  }

module.exports ={
  createUser,

};
