const express = require('express')
const {registerUser, authUser} = require('../controllers/userControllers')
const router = express.Router();

router.route('/').post(registerUser);// here, /something= api/route/something from app.use function in server.js

router.post('/login', authUser)

module.exports = router;

