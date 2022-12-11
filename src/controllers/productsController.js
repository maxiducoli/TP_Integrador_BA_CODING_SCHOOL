<<<<<<< HEAD
const path = require('path');
const fs = require('fs');

const pathDataBase = path.resolve(__dirname, '../data/products.json');
const productJson = fs.readFileSync(pathDataBase, 'utf8');

const products = JSON.parse(productJson);

const controller ={
product: (req, res) => {
    let product = products.filter(product =>{
        return product.id == req.params.id;
    });
res.render('products/product', {product: products});
},
add: (req, res) => {
res.render('products/add', {products: products});
},
edit: (req, res) => {
    let product = products.filter(product =>{
        return product.id == req.params.id;
    });
res.render('products/edit', {product: products});
},
};

module.exports = controller;
=======
const path = require('path');
const fs = require('fs');

const pathDataBase = path.resolve(__dirname, '../data/products.json');
const productJson = fs.readFileSync(pathDataBase, 'utf8');

const products = JSON.parse(productJson);

const controller ={
product: (req, res) => {
    let product = products.filter(product =>{
        return product.id == req.params.id;
    });
res.render('products/product', {producto: products});
},
add: (req, res) => {
res.render('products/add', {productos: products});
},
edit: (req, res) => {
    let product = products.filter(product =>{
        return product.id == req.params.id;
    });
res.render('products/edit', {productos: products});
},
};

module.exports = controller;
>>>>>>> 9a9591cb69ee0830b3ae3b684ee78c0ed054f866
