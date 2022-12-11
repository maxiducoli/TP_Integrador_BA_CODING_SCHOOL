<<<<<<< HEAD
const path = require('path');
const fs = require('fs');

const pathDataBase = path.resolve(__dirname, '../data/products.json');
const productJson = fs.readFileSync(pathDataBase, 'utf8');

const products = JSON.parse(productJson);


module.exports = {
    home: (req, res) => {
     res.render('index', {products: products});
    },
=======
const path = require('path');
const fs = require('fs');

const pathDataBase = path.resolve(__dirname, '../data/products.json');
const productJson = fs.readFileSync(pathDataBase, 'utf8');

const products = JSON.parse(productJson);


module.exports = {
    home: (req, res) => {
     res.render('index', {productos: products});
    },
>>>>>>> 9a9591cb69ee0830b3ae3b684ee78c0ed054f866
};