const express = require('express');
const { registerUser, loginUser, logoutUser, myDetails } = require('../controllers/userController');
const authMiddleware = require('../middlewares/authMiddlewares');
const router = express.Router();


router.route('/profile').get(authMiddleware, myDetails);
router.route('/register').post(registerUser);
router.route('/login').post(loginUser);
router.route('/logout').post(authMiddleware,logoutUser);


module.exports = router;