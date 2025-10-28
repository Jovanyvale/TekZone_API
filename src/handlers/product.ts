import { Request, Response } from "express";
import Product from "../models/Product.model";

// Obtener todos los productos
export const getProducts = async (req: Request, res: Response) => {
    try {
        console.log("Petición GET /api/products");
        const products = await Product.findAll({
            order: [['id', 'ASC']],
            attributes: { exclude: ['createdAt', 'updatedAt'] }
        });
        console.log("Productos encontrados:", products.length);
        return res.json({ data: products });
    } catch (error) {
        console.error("Error en getProducts:", error);
        return res.status(500).json({ error: 'Internal server error' });
    }
};

// Obtener producto por ID
export const getProductById = async (req: Request, res: Response) => {
    try {
        const { id } = req.params;
        console.log(`Petición GET /api/products/${id}`);
        const product = await Product.findByPk(id);
        if (!product) return res.status(404).json({ error: 'Product not found' });
        return res.json({ data: product });
    } catch (error) {
        console.error("Error en getProductById:", error);
        return res.status(500).json({ error: 'Internal server error' });
    }
};

// Crear producto
export const createProduct = async (req: Request, res: Response) => {
    try {
        console.log("Petición POST /api/products", req.body);
        const product = new Product(req.body);
        const savedProduct = await product.save();
        console.log("Producto creado:", savedProduct.id);
        return res.status(201).json({ data: savedProduct });
    } catch (error) {
        console.error("Error en createProduct:", error);
        return res.status(500).json({ error: 'Internal server error' });
    }
};

// Actualizar producto
export const updateProduct = async (req: Request, res: Response) => {
    try {
        const { id } = req.params;
        console.log(`Petición PUT /api/products/${id}`, req.body);
        const product = await Product.findByPk(id);
        if (!product) return res.status(404).json({ error: 'Product not found' });

        await product.update(req.body);
        await product.save();
        console.log("Producto actualizado:", product.id);
        return res.json({ data: product });
    } catch (error) {
        console.error("Error en updateProduct:", error);
        return res.status(500).json({ error: 'Internal server error' });
    }
};

// Actualizar stock
export const updateStock = async (req: Request, res: Response) => {
    try {
        const { id } = req.params;
        console.log(`Petición PATCH /api/products/${id}/stock`);
        const product = await Product.findByPk(id);
        if (!product) return res.status(404).json({ error: 'Product not found' });

        product.stock += 1;
        await product.save();
        console.log("Stock actualizado para producto:", product.id);
        return res.json({ data: product });
    } catch (error) {
        console.error("Error en updateStock:", error);
        return res.status(500).json({ error: 'Internal server error' });
    }
};

// Eliminar producto
export const deleteProduct = async (req: Request, res: Response) => {
    try {
        const { id } = req.params;
        console.log(`Petición DELETE /api/products/${id}`);
        const product = await Product.findByPk(id);
        if (!product) return res.status(404).json({ error: 'Product not found' });

        await product.destroy();
        console.log("Producto eliminado:", product.id);
        return res.json({ data: product });
    } catch (error) {
        console.error("Error en deleteProduct:", error);
        return res.status(500).json({ error: 'Internal server error' });
    }
};