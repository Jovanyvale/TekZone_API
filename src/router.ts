import { Router } from "express";
const router = Router()
import { createProduct, getProducts, getProductById, updateProduct, updateStock, deleteProduct } from "./handlers/product";
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
    handleInputErros,
    updateProduct)

router.patch('/:id', param('id').isInt().withMessage('Not valid id'),
    handleInputErros,
    updateStock)

router.delete('/:id', param('id').isInt().withMessage('Not valid id'),
    handleInputErros,
    deleteProduct
)

export default router