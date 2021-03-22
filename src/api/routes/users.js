const express = require('express')
const usersController = require('../controllers/users')
const { authenticate } = require('../middleware/index')
const router = express.Router()

router.get('/', usersController.getAllUsers)

router.get('/:id', usersController.getUserById)

router.post('/', authenticate, usersController.createUser)

router.put('/:id', authenticate, usersController.updateUserById)

router.delete('/:first_name', authenticate, usersController.deleteUserByFirstName)

module.exports = router