import { Request, Response } from "express"
import Product from "../models/Product.model"
import { UpdatedAt } from "sequelize-typescript"

export const getProducts = async (req, res) => {
    try {
        const products = await Product.findAll({
            order: [
                ['id', 'ASC']
            ],
            attributes: { exclude: ['createdAt', 'updatedAt'] }
        })
        res.json({ id: products })
    } catch (error) {
        console.log(error)
    }

}


export const createProduct = async (req: Request, res: Response) => {
    try {
        const product = new Product(req.body)
        const savedProduct = await product.save()
        res.json({ data: { savedProduct } })
    } catch (error) {
        console.log(error)
    }

}
