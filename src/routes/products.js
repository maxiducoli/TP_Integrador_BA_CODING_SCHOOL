<<<<<<< HEAD
const express = require('express');
const router = express.Router();

const controller = require('../controllers/productsController');

router.get('/product/:id', controller.product);
router.get('/add', controller.add);
router.get('/edit/:id', controller.edit);

=======
const express = require('express');
const router = express.Router();

const controller = require('../controllers/productsController');

router.get('/product/:id', controller.product);
router.get('/add', controller.add);
router.get('/edit/:id', controller.edit);

>>>>>>> 9a9591cb69ee0830b3ae3b684ee78c0ed054f866
module.exports = router;