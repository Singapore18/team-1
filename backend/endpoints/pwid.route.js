const router = require("express").Router();
const pwidController = require("./PwID.controller");
router
  .get("/", pwidController.list)
  .post("/", pwidController.create)
module.exports = router;
