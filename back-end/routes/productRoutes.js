const express = require('express');
const router = express.Router();

const {index, getProductbyId }=require('../controllers/productController')

router.get('/', index)
router.get('/:id', getProductbyId)

module.exports = router;