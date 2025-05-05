import { Request, Response } from "express"
import Product from "../models/Product.model"
import colors from "colors"
import { check, validationResult } from "express-validator"

export const createProduct = async (req: Request, res: Response) => {
    let errors = await validationResult(req)
    if (!errors.isEmpty()) {
        res.status(400).json({ errors: errors.array() })
        return
    }


    const product = new Product(req.body)
    const savedProduct = await product.save()
    res.json({ data: { savedProduct } })
}
