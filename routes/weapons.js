const express = require('express');
const weaponsController = require('../controllers/weapons');
const { authenticate } = require('../middleware/index');
const router = express.Router();

router.get('/', weaponsController.getAllWeapons)
router.get('/:weapon_id', authenticate, weaponsController.getSingleWeapon)

module.exports = router;