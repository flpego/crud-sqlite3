const express = require('express');
const router = express.Router();

const productsController = require('../controllers/products.controller')


router.get('/products', productsController.getAllProductsController);//get all products
router.get('/products/:id', productsController.getProductByIdController);//get by ID
router.post('/products', productsController.createNewProductController);//create new Product
router.put('/products/:id', productsController.updateProductController);//update a product
router.delete('/products/:id', productsController.deleteProductController);//delete a product
module.exports = router;
