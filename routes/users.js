const express = require('express')
const usersController = require('../controllers/users')
const { authenticate } = require('../middleware/index')
const router = express.Router()

router.get('/', authenticate, usersController.getAllUsers)

router.get('/:username', authenticate, usersController.getUserByUsername)

router.post('/signup/:username', usersController.createUser)

router.delete('/:first_name', authenticate, usersController.deleteUserByUsername)

module.exports = router