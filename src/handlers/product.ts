import { Request, Response } from "express"
import Product from "../models/Product.model"

export const getProducts = async (req: Request, res: Response) => {
    try {
        const products = await Product.findAll({
            order: [
                ['id', 'ASC']
            ],
            attributes: { exclude: ['createdAt', 'updatedAt'] }
        })
        res.json({ data: products })
    } catch (error) {
        console.log(error)
    }
}

export const getProductById = async (req: Request, res: Response) => {
    try {
        const { id } = req.params
        const product = await Product.findByPk(id)

        if (!product) {
            res.status(404).json({
                error: 'Product not founded'
            })
        }

        res.json({ data: product })
    } catch (error) {
        console.log(error)
    }
}


export const createProduct = async (req: Request, res: Response) => {
    try {
        const product = new Product(req.body)
        const savedProduct = await product.save()
        res.status(201).json({ data: { savedProduct } })
    } catch (error) {
        console.log(error)
    }

}

export const updateProduct = async (req: Request, res: Response) => {
    const { id } = req.params
    const product = await Product.findByPk(id)

    if (!product) {
        res.status(404).json({
            error: 'Product not founded'
        })
    }

    //Update
    await product.update(req.body)
    await product.save()

    res.json({ data: product })
}

export const updateStock = async (req: Request, res: Response) => {
    const { id } = req.params
    const product = await Product.findByPk(id)

    if (!product) {
        res.status(404).json({
            error: 'Product not founded'
        })
    }

    product.stock += 1
    await product.save()

    res.json({ data: product })
}

export const deleteProduct = async (req: Request, res: Response) => {
    const { id } = req.params
    const product = await Product.findByPk(id)

    if (!product) {
        res.status(404).json({
            error: 'Product not founded'
        })
    }

    await product.destroy()
    res.json({ data: product })
}