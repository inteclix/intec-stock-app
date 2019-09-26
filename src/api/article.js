module.exports = (app, db) => {
  app.get("/api/articles", (req, res) =>
    db.Article
      .findAll({
        include: [{ model: db.Famille, attributes: ["name"]}]
      })
      .then(result => res.json(result))
  );

  app.get("/api/articles/:id", (req, res) =>
    db.Article.findByPk(req.params.id).then(result => res.json(result))
  );

  app.post("/api/articles", (req, res) =>
    db.Article
      .create({
        code: req.body.code,
        designation: req.body.designation,
        prix_vente: req.body.prix_vente,
        prix_achat: req.body.prix_achat,
        qte: req.body.qte,
        familleId: req.body.familleId,
      })
      .then(result => res.json(result))
      .catch((err)=> res.status(404).json(err))
  );

  app.put("/api/articles/:id", (req, res) =>
    db.Article
      .update(
        {
          code: req.body.code,
          designation: req.body.designation,
          prix_vente: req.body.prix_vente,
          prix_achat: req.body.prix_achat,
          qte: req.body.qte,
          familleId: req.body.familleId,
        },
        {
          where: {
            id: req.params.id
          }
        }
      )
      .then(result => res.json(result))
  );

  app.delete("/api/articles/:id", (req, res) =>
    db.Article
      .destroy({
        where: {
          id: req.params.id
        }
      })
      .then(result => res.json(result))
  );
};
