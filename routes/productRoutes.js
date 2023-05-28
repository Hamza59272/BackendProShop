var express = require('express')
const router = express.Router()
var {
  getProducts,
  getProductById,
  deleteProduct,
  createProduct,
  updateProduct,
  createProductReview,
  getTopProducts,
} = require ('../controllers/productController.js')
var {protect, admin } = require('../middleware/authMiddleware.js')
require('dotenv').config();
const {SECRET_KEY} = process.env

router.route('/').get(getProducts).post(protect, admin, createProduct)
router.route('/:id/reviews').post(protect, createProductReview)
router.get('/top', getTopProducts)
router
  .route('/:id')
  .get(getProductById)
  .delete(protect, admin, deleteProduct)
  .put(protect, admin, updateProduct)

module.exports = router
