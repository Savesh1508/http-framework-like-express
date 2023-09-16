const Router = require("../../framework/router.js");
const {
  createUser,
  getUsers
} = require("../controllers/user-controller.js");
const router = new Router()

router.get('/users', getUsers)

router.post('/users', createUser)

module.exports = router