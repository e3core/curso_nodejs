const express = require('express')
const router = express.Router()
const controllers = require('../controllers/usersControllers')

router.get('/',controllers.getAllUsers)
router.get('/:id',controllers.getUsers)
router.post('/',controllers.createUsers)
router.put('/:id',controllers.updateUsers)
router.delete('/:id',controllers.deleteUsers)

module.exports = router;
