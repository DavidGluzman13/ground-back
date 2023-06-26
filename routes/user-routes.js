const router = require("express").Router();
const userController = require("../controllers/user-controller");

router.route("/:id/logs").get(userController.index).post(userController.add);

module.exports = router;
