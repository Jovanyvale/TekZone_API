import { Router } from "express";
const router = Router()
import { createProduct } from "./handlers/createProduct";
import { body } from "express-validator";

//Routing 
router.get('/', (req, res) => {
    res.json(`Hola mundo en express`)
})

router.post('/', body('name').notEmpty().withMessage('Name field can not be empty'),
    body('price').isNumeric().notEmpty().withMessage('Price field can not be empty'),
    createProduct)

router.patch('/', (req, res) => {
    res.json('patch')
})

router.delete('/', (req, res) => {
    res.json(`Deletye`)
})

export default router