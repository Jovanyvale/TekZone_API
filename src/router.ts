import { Router } from "express";
const router = Router()
import { createProduct, getProducts, getProductById, updateProduct } from "./handlers/product";
import { body, param } from "express-validator";
import { handleInputErros } from "./middleware";

//Routing 
router.get('/', getProducts)

router.get('/:id',
    param('id').isInt().withMessage('Not valid id'),
    handleInputErros,
    getProductById)

router.post('/', body('name').notEmpty().withMessage('Name field can not be empty'),
    body('price').isNumeric().notEmpty().withMessage('Price field can not be empty'),
    handleInputErros,
    createProduct)

router.put('/:id', body('name').notEmpty().withMessage('Name field can not be empty'),
    body('price').isNumeric().notEmpty().withMessage('Price field can not be empty'),
    body('stock').isNumeric().notEmpty().withMessage('Stock field can not be empty'),
    updateProduct)

router.patch('/', (req, res) => {
    res.json('patch')
})

router.delete('/', (req, res) => {
    res.json(`Delete`)
})

export default router