const router = require("express").Router();
const pwidRouter = require("./pwid.route");
const userRouter = require("./user.route");
router.use("/user", userRouter);
router.use("/pwid", pwidRouter );
module.exports = router;