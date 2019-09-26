const jsonWebToken = require("jsonwebtoken");

const JWTSecretKey = "Ssbdkjhfkjzhfzkfjb";

module.exports = (app, db) => {
  app.post("/login", (req, res) => {
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
};
