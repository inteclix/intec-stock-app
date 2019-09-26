module.exports = (app, db) => {
  app.get("/api/fournisseurs", (req, res) =>
    db.Fournisseur.findAll().then(result => res.json(result))
  );

  app.get("/api/fournisseurs/:id", (req, res) =>
    db.Fournisseur.findByPk(req.params.id).then(result => res.json(result))
  );

  app.post("/api/fournisseurs", (req, res) =>
    db.Fournisseur
      .create({
        nom: req.body.nom,
        prenom: req.body.prenom,
        tel: req.body.tel,
        solde: req.body.solde,
        type: req.body.type,
        raison_social: req.body.raison_social
      })
      .then(result => res.json(result))
  );

  app.put("/api/fournisseurs/:id", (req, res) =>
    db.Fournisseur
      .update(
        {
          nom: req.body.nom,
          prenom: req.body.prenom,
          tel: req.body.tel,
          solde: req.body.solde,
          type: req.body.type,
          raison_social: req.body.raison_social
        },
        {
          where: {
            id: req.params.id
          }
        }
      )
      .then(result => res.json(result))
  );

  app.delete("/api/fournisseurs/:id", (req, res) =>
    db.Fournisseur
      .destroy({
        where: {
          id: req.params.id
        }
      })
      .then(result => res.json(result))
  );
};
