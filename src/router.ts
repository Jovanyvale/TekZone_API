import { Router } from "express";
const router = Router()
import { createProduct, getProducts } from "./handlers/product";
import { body } from "express-validator";
import { handleInputErros } from "./middleware";

//Routing 
router.get('/', getProducts)

router.post('/', body('name').notEmpty().withMessage('Name field can not be empty'),
    body('price').isNumeric().notEmpty().withMessage('Price field can not be empty'),
    handleInputErros,
    createProduct)

router.patch('/', (req, res) => {
    res.json('patch')
})

router.delete('/', (req, res) => {
    res.json(`Delete`)
})

export default router