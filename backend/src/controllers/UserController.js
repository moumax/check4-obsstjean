const models = require("../models");
const { hashPassword } = require("../helpers/argonHelper");

class UserController {
  static browse = (req, res) => {
    models.user
      .findAll()
      .then(([rows]) => {
        const answer = rows.filter((user) => user.id === req.userId);

        res.send(answer);
      })
      .catch((err) => {
        console.error(err);
        res.sendStatus(500);
      });
  };

  static read = (req, res) => {
    models.user
      .find(req.params.id)
      .then(([rows]) => {
        const filteredAnswer = rows.filter((user) => user.id === req.userId);

        if (!rows.length) res.sendStatus(404);

        if (rows.length && !filteredAnswer.length) res.sendStatus(403);

        if (rows.length && filteredAnswer.length) res.send(filteredAnswer);
      })

      .catch((err) => {
        console.error(err);
        res.sendStatus(500);
      });
  };

  static add = (req, res) => {
    const newUser = req.body;
    const authorized = true;

    if (authorized) {
      const validationErrors = models.user.validate(newUser);
      if (validationErrors) {
        console.error(validationErrors);
        return res.status(422).json({ validationErrors });
      }

      hashPassword(newUser.password).then((hash) => {
        delete newUser.password;

        models.user
          .insert({ ...newUser, password_hash: hash })
          .then(([result]) => {
            res.status(201).send({ ...newUser, id: result.insertId });
          })
          .catch((err) => {
            console.error(err);
            res.sendStatus(500);
          });
      });
    } else res.sendStatus(403);
    return true;
  };

  static modify = async (req, res) => {
    const newUser = req.body;
    const authorized = true;

    if (authorized) {
      if (newUser.password) {
        newUser.password_hash = await hashPassword(newUser.password);
        delete newUser.password;
      }
      const validationErrors = models.user.validate(newUser, false);
      if (validationErrors) res.status(422).json({ validationErrors });
      else {
        models.user
          .update(newUser, req.params.id)
          .then(([result]) => {
            if (result.affectedRows === 0)
              throw new Error("no change affected");
            delete newUser.password_hash;
            res.status(201).send({ ...newUser });
          })
          .catch((err) => {
            console.error(err);
            res.sendStatus(500);
          });
      }
    } else res.sendStatus(403);
  };

  static delete = async (req, res) => {
    const authorized = true;

    if (authorized) {
      models.user
        .delete(req.params.id)
        .then(() => {
          res.sendStatus(204);
        })
        .catch((err) => {
          console.error(err);
          res.sendStatus(500);
        });
    } else res.sendStatus(403);
  };
}

module.exports = UserController;
