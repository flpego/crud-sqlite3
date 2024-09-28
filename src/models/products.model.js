const db = require('../db');

//get all products method: GET
function getAllProducts(callback) {
    const query = 'SELECT * FROM products';
    db.all(query, [], (err, rows) => {
        callback(err, rows);
    });
};

//get products byID method: GET

function getProductById(id , callback) {
    const query = 'SELECT * FROM products WHERE id = ?';

    db.get(query, [id], (err, rows) => {
        callback(err, rows);
    });

};

//create new product method: POST

function createNewProduct(product, callback){
    const {name, price, description, stock} = product;
    const query = 'INSERT INTO products (name, price, description, stock) VALUES (?, ?, ?, ?)';

    db.run(query, [name, price, description, stock], (err) => {
        callback(err, {changes: this.changes});
    });

};

//update info method: PUT

function updateProduct (id, product, callback){

    const {name, price, description, stock} = product;

    const query = 'UPDATE products SET name = ?, price = ?, description = ?, stock = ? WHERE id = ?';
    db.run(query, [name, price, description, stock, id], (err) => { 
        callback(err, {changes: this.change});
     });
};

//delete a product method: DELETE

function deleteProduct (id, callback){

    const query = 'DELETE FROM products WHERE id = ?';

    db.run(query, [id], (err) => { 
        callback(err, {changes: this.changes})
     })

}


module.exports = {
    getAllProducts,
    getProductById,
    createNewProduct,
    updateProduct,
    deleteProduct
}