const express = require('express');
const { addProduct, getProducts } = require('../controllers/productController');
const authMiddleware = require('../middlewares/authMiddlewares');
const authAdmin = require('../middlewares/authAdmin');
const router = express.Router();


router.route('/').post(authMiddleware,authAdmin,addProduct).get(getProducts);


module.exports = router;