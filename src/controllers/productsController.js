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
