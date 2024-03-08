const { weightLoss, weightGain, healthy } = require('../controllers/userData');
const { register, login } = require('../controllers/authentication');
const authenticateToken = require('../middleware/jwtauthorization');

const router = require('express').Router();

router.post('/weight_loss', weightLoss)
.post('/weight_gain', weightGain)
.post('/healthy', healthy)
.post('/register', register)
.post('/login', login)

module.exports = router;
