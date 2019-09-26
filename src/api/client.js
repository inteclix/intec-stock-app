module.exports = (app, db) => {
  app.get("/api/clients", (req, res) =>
    db.Client.findAll().then(result => res.json(result))
  );

  app.get("/api/clients/:id", (req, res) =>
    db.Client.findByPk(req.params.id).then(result => res.json(result))
  );

  app.post("/api/clients", (req, res) =>
    db.Client
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

  app.put("/api/clients/:id", (req, res) =>
    db.Client
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

  app.delete("/api/clients/:id", (req, res) =>
    db.Client
      .destroy({
        where: {
          id: req.params.id
        }
      })
      .then(result => res.json(result))
  );
};
