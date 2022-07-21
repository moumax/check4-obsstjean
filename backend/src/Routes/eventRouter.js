const express = require("express");
const EventController = require("../controllers/EventController");

const router = express.Router();

router.get("/", EventController.browse);
router.get("/:id", EventController.read);
router.post("/", EventController.add);
router.put("/:id", EventController.modify);
router.delete("/:id", EventController.delete);

module.exports = router;
