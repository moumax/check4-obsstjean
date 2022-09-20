const Joi = require("joi");
const AbstractManager = require("./AbstractManager");

class CamerasManager extends AbstractManager {
  static table = "cameras";

  validate(data, forCreation = true) {
    this.presence = forCreation ? "required" : "optional";

    const joiObject = {
      brand: Joi.string().max(255).presence(this.presence),
      model: Joi.string().max(255).presence(this.presence),
      diameter: Joi.number().max(500).presence(this.presence),
      focallength: Joi.number().max(100).presence(this.presence),
      FD: Joi.number().max(100).presence(this.presence),
      R: Joi.number().max(100).presence(this.presence),
    };

    return Joi.object(joiObject).validate(data, { abortEarly: false }).error;
  }

  insert(camera) {
    return this.connection.query(
      `insert into ${CamerasManager.table} (brand, model, diameter, focallength, FD, R) values (?, ?, ?, ?, ?, ?)`,
      [
        camera.brand,
        camera.model,
        camera.diameter,
        camera.focallength,
        camera.FD,
        camera.R,
      ]
    );
  }

  update(camera, id) {
    return this.connection.query(
      `update ${CamerasManager.table} set ? where id = ?`,
      [camera, id]
    );
  }

  findByCamerasId(camera, id) {
    return this.connection.query(`select * from  ${this.table} where id = ?`, [
      camera,
      id,
    ]);
  }
}

module.exports = CamerasManager;
