const express = require("express");
const bodyParser = require("body-parser");
//const faker = require("faker");
//const times = require("lodash.times");
//const random = require("lodash.random");
const jsonWebToken = require("jsonwebtoken");
const path= require("path")
const db = require("../models");
const apiArticle = require("./api/article");
const apiClient = require("./api/client");
const apiFournisseur = require("./api/fournisseur");
const apiUser = require("./api/user");
const apiAuth = require("./api/auth");

const JWTSecretKey = "Ssbdkjhfkjzhfzkfjb";

const cors = require("cors");
const app = express();
app.use(cors());

app.use(bodyParser.json());
//app.use(express.static("public"));
//app.use('/', express.static('public'));

app.use('/', express.static(__dirname + '/public'));
app.post("/api/login", (req, res) => {
  console.log("login");
  db.User
    .findOne({
      where: {
        username: req.body.username,
        password: req.body.password
      }
    })
    .then(result => {
      const token = jsonWebToken.sign(result.dataValues, JWTSecretKey);
      res.json({
        token: token,
        user: result
      });
    });
});

// check user if login with jwt
app.use("/api/*", (req, res, next) => {
  const header = req.headers["authorization"];

  if (typeof header !== "undefined") {
    const bearer = header.split(" ");
    const token = bearer[1];
    try {
      const user = jsonWebToken.verify(token, JWTSecretKey);
      req.user = user;
      next();
    } catch (error) {
      // 401 Unauthorized
      res.sendStatus(401);
    }
  } else {
    //If header is undefined return Forbidden (403)
    res.sendStatus(403);
  }
});

apiArticle(app, db);
apiFournisseur(app, db);
apiClient(app, db);
apiUser(app, db);
apiAuth(app, db);

app.get("*", (req, res)=>{
  res.sendFile(__dirname + '/public/index.html')
})
/*
db.sequelize.sync().then(() => {
  db.famille.create({
    name: "Tous"
  });

  db.user.create({
    username: "seddikbenz",
    password: "123456789",
    isAdmin: 1
  });

  db.article.bulkCreate(
    times(10, () => ({
      familleId: 1,
      designation: faker.lorem.sentence()
    }))
  );
  db.achat.create({ }).then((achat)=>{
    db.article_achat.create({
      articleId: 1,
      achatId: achat.id,
      prix_achat: 500,
      qte: 5
    })
    db.article_achat.create({
      articleId: 2,
      achatId: achat.id,
      prix_achat: 300,
      qte: 10
    })
    db.article_achat.create({
      articleId: 3,
      achatId: achat.id,
      prix_achat: 700,
      qte: 30
    })
  })


  app.listen(8080, () => console.log("App listening on port 8080!"));
});
*/
// app.listen(8080, () => console.log("App listening on port 8080!"));

module.exports = app