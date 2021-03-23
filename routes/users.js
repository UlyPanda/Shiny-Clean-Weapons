const express = require('express')
const usersController = require('../controllers/users')
const { authenticate } = require('../middleware/index')
const router = express.Router()

router.get('/', usersController.getAllUsers)

router.get('/:username', usersController.getUserById)

router.post('/signup/:username', usersController.createUser)

router.put('/:username', usersController.updateUserById)

router.delete('/:first_name', authenticate, usersController.deleteUserByFirstName)

module.exports = router