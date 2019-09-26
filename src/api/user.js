module.exports = (app, db) => {
  app.get("/api/me", (req, res) => {
    res.json(req.user);
  });

  app.get("/api/users", (req, res) =>
    db.User.findAll().then(result => res.json(result))
  );

  app.get("/api/users/:id", (req, res) =>
    db.User.findByPk(req.params.id).then(result => res.json(result))
  );

  app.post("/api/users", (req, res) =>
    db.User
      .create({
        username: req.body.username,
        password: req.body.password,
        isAdmin: req.body.isAdmin
      })
      .then(result => res.json(result))
  );

  app.put("/api/users/:id", (req, res) =>
    db.User
      .update(
        {
          username: req.body.username,
          password: req.body.password,
          isAdmin: req.body.isAdmin
        },
        {
          where: {
            id: req.params.id
          }
        }
      )
      .then(result => res.json(result))
  );

  app.delete("/api/users/:id", (req, res) =>
    db.User
      .destroy({
        where: {
          id: req.params.id
        }
      })
      .then(result => res.json(result))
  );
};
