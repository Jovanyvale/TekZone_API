"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.deleteProduct = exports.updateStock = exports.updateProduct = exports.createProduct = exports.getProductById = exports.getProducts = void 0;
const Product_model_1 = __importDefault(require("../models/Product.model"));
// Obtener todos los productos
const getProducts = async (req, res) => {
    try {
        console.log("Petición GET /api/products");
        const products = await Product_model_1.default.findAll({
            order: [['id', 'ASC']],
            attributes: { exclude: ['createdAt', 'updatedAt'] }
        });
        console.log("Productos encontrados:", products.length);
        return res.json({ data: products });
    }
    catch (error) {
        console.error("Error en getProducts:", error);
        return res.status(500).json({ error: 'Internal server error' });
    }
};
exports.getProducts = getProducts;
// Obtener producto por ID
const getProductById = async (req, res) => {
    try {
        const { id } = req.params;
        console.log(`Petición GET /api/products/${id}`);
        const product = await Product_model_1.default.findByPk(id);
        if (!product)
            return res.status(404).json({ error: 'Product not found' });
        return res.json({ data: product });
    }
    catch (error) {
        console.error("Error en getProductById:", error);
        return res.status(500).json({ error: 'Internal server error' });
    }
};
exports.getProductById = getProductById;
// Crear producto
const createProduct = async (req, res) => {
    try {
        console.log("Petición POST /api/products", req.body);
        const product = new Product_model_1.default(req.body);
        const savedProduct = await product.save();
        console.log("Producto creado:", savedProduct.id);
        return res.status(201).json({ data: savedProduct });
    }
    catch (error) {
        console.error("Error en createProduct:", error);
        return res.status(500).json({ error: 'Internal server error' });
    }
};
exports.createProduct = createProduct;
// Actualizar producto
const updateProduct = async (req, res) => {
    try {
        const { id } = req.params;
        console.log(`Petición PUT /api/products/${id}`, req.body);
        const product = await Product_model_1.default.findByPk(id);
        if (!product)
            return res.status(404).json({ error: 'Product not found' });
        await product.update(req.body);
        await product.save();
        console.log("Producto actualizado:", product.id);
        return res.json({ data: product });
    }
    catch (error) {
        console.error("Error en updateProduct:", error);
        return res.status(500).json({ error: 'Internal server error' });
    }
};
exports.updateProduct = updateProduct;
// Actualizar stock
const updateStock = async (req, res) => {
    try {
        const { id } = req.params;
        console.log(`Petición PATCH /api/products/${id}/stock`);
        const product = await Product_model_1.default.findByPk(id);
        if (!product)
            return res.status(404).json({ error: 'Product not found' });
        product.stock += 1;
        await product.save();
        console.log("Stock actualizado para producto:", product.id);
        return res.json({ data: product });
    }
    catch (error) {
        console.error("Error en updateStock:", error);
        return res.status(500).json({ error: 'Internal server error' });
    }
};
exports.updateStock = updateStock;
// Eliminar producto
const deleteProduct = async (req, res) => {
    try {
        const { id } = req.params;
        console.log(`Petición DELETE /api/products/${id}`);
        const product = await Product_model_1.default.findByPk(id);
        if (!product)
            return res.status(404).json({ error: 'Product not found' });
        await product.destroy();
        console.log("Producto eliminado:", product.id);
        return res.json({ data: product });
    }
    catch (error) {
        console.error("Error en deleteProduct:", error);
        return res.status(500).json({ error: 'Internal server error' });
    }
};
exports.deleteProduct = deleteProduct;
//# sourceMappingURL=product.js.map