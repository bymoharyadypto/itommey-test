const IndexController = require('../controller/indexController')
const router = require('express').Router()

router.get('/product', IndexController.getProducts)
router.get('/product/:id', IndexController.getProductById)
router.post('/product', IndexController.addProduct)
router.delete('/product/:id', IndexController.removeProduct)
router.put('/product/:id', IndexController.updateProduct)

module.exports = router