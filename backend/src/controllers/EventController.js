const models = require("../models");

class EventController {
  static browse = (req, res) => {
    models.events
      .findAll()
      .then((events) => res.send(events))
      .catch((err) => {
        console.error(err);
        res.sendStatus(500);
      });
  };

  static read = (req, res) => {
    models.events
      .find(req.params.id)
      .then((event) => {
        if (event.length === 0) {
          res.sendStatus(404);
        } else {
          res.send(event);
        }
      })

      .catch((err) => {
        console.error(err);
        res.sendStatus(500);
      });
  };

  static add = (req, res) => {
    const newEvent = req.body;
    models.events
      .insert({ ...newEvent })
      .then(([result]) => {
        res.status(201).send({ ...newEvent, id: result.insertId });
      })

      .catch((err) => {
        console.error(err);
        res.sendStatus(500);
      });
  };

  static modify = async (req, res) => {
    const newEvent = req.body;

    models.events
      .update(newEvent, req.params.id)
      .then(([result]) => {
        if (result.affectedRows === 0) throw new Error("no change affected");
        res.status(201).send({ ...newEvent });
      })
      .catch((err) => {
        console.error(err);
        res.sendStatus(500);
      });
  };

  static delete = async (req, res) => {
    models.events
      .delete(req.params.id)
      .then(() => {
        res.sendStatus(204);
      })
      .catch((err) => {
        console.error(err);
        res.sendStatus(500);
      });
  };
}

module.exports = EventController;
