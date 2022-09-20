const Joi = require("joi");
const AbstractManager = require("./AbstractManager");

class CamerasManager extends AbstractManager {
  static table = "cameras";

  validate(data, forCreation = true) {
    this.presence = forCreation ? "required" : "optional";

    const joiObject = {
      brand: Joi.string().max(255).presence(this.presence),
      model: Joi.string().max(255).presence(this.presence),
      sensor: Joi.string().max(255).presence(this.presence),
      widthmm: Joi.number().max(255).presence(this.presence),
      heightmm: Joi.number().max(255).presence(this.presence),
      widthpx: Joi.number().max(255).presence(this.presence),
      height: Joi.number().max(255).presence(this.presence),
      photosites: Joi.number().max(255).presence(this.presence),
      megapixels: Joi.number().max(255).presence(this.presence),
      maxspeed: Joi.number().max(255).presence(this.presence),
      dynamic: Joi.number().max(255).presence(this.presence),
      bits: Joi.number().max(255).presence(this.presence),
      readnoise: Joi.string().max(255).presence(this.presence),
      cooler: Joi.number().max(255).presence(this.presence),
    };

    return Joi.object(joiObject).validate(data, { abortEarly: false }).error;
  }

  insert(camera) {
    return this.connection.query(
      `insert into ${CamerasManager.table} (brand, model, sensor, widthmm, heightmm, widthpx, height, photosites, megapixels, maxspeed, dynamic, bits, readnoise, cooler) values (?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?)`,
      [
        camera.brand,
        camera.model,
        camera.sensor,
        camera.widthmm,
        camera.heightmm,
        camera.widthpx,
        camera.height,
        camera.photosites,
        camera.megapixels,
        camera.maxspeed,
        camera.dynamic,
        camera.bits,
        camera.readnoise,
        camera.cooler,
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
