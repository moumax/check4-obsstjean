const models = require("../models");

class CamerasController {
  static browse = (req, res) => {
    models.cameras
      .findAll()
      .then((camera) => res.send(camera))
      .catch((err) => {
        console.error(err);
        res.sendStatus(500);
      });
  };

  static read = (req, res) => {
    models.cameras
      .find(req.params.id)
      .then((camera) => {
        if (camera.length === 0) {
          res.sendStatus(404);
        } else {
          res.send(camera);
        }
      })

      .catch((err) => {
        console.error(err);
        res.sendStatus(500);
      });
  };

  static add = (req, res) => {
    const newCamera = req.body;
    models.cameras
      .insert({ ...newCamera })
      .then(([result]) => {
        res.status(201).send({ ...newCamera, id: result.insertId });
      })

      .catch((err) => {
        console.error(err);
        res.sendStatus(500);
      });
  };

  static modify = async (req, res) => {
    const newCamera = req.body;

    models.cameras
      .update(newCamera, req.params.id)
      .then(([result]) => {
        if (result.affectedRows === 0) throw new Error("no change affected");
        res.status(201).send({ ...newCamera });
      })
      .catch((err) => {
        console.error(err);
        res.sendStatus(500);
      });
  };

  static delete = async (req, res) => {
    models.cameras
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

module.exports = CamerasController;
