

const productsModel = require('../models/products.model')

//get all products controller
const getAllProductsController = (req, res) => {
    productsModel.getAllProducts((err, products) => {
        if (err) {
            return res.status(500).json({ error: err.message });
        };
        res.json({ message: 'success', data: products });
    });
};
//get  products by ID controller

const getProductByIdController = (req, res) => {
    const id = req.params.id;
    productsModel.getProductById(id, (err, product) => {
        if (err) {
            return res.status(500).json({ error: err.message });
        };
        res.json({ message: 'Product finded', data: product })
    });
};

//create new product controller

const createNewProductController = (req, res) => {
    const newProduct = req.body;
    productsModel.createNewProduct(newProduct, (err, product) => {
        if (err) {
            return res.status(500).json({ error: err.message });
        };
        res.json({ message: 'New product created', data: product })
    });
};

//update product controller
const updateProductController = (req, res) => {
    const id = req.params.id;
    const updatedProduct = req.body;
    productsModel.updateProduct(id, updatedProduct, (err, result) => {
        if (err) {
            return res.status(500).json({ error: err.message });
        };
        res.json({ message: 'Product updated', changes: result.changes });
    });
};
//delete a product controller
const deleteProductController = (req, res) => {
    const id = req.params.id;

    productsModel.deleteProduct(id, (err, result) => {
        if (err) {
            return res.status(500).json({ error: err.message });
        }
        res.json({message: 'Product deleted', changes: result.changes})
    });
};

module.exports = {
    getAllProductsController,
    getProductByIdController,
    createNewProductController,
    updateProductController,
    deleteProductController
}

