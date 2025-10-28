"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.deleteProduct = exports.updateStock = exports.updateProduct = exports.createProduct = exports.getProductById = exports.getProducts = void 0;
const Product_model_1 = __importDefault(require("../models/Product.model"));
const getProducts = async (req, res) => {
    try {
        const products = await Product_model_1.default.findAll({
            order: [
                ['id', 'ASC']
            ],
            attributes: { exclude: ['createdAt', 'updatedAt'] }
        });
        res.json({ data: products });
    }
    catch (error) {
        console.log(error);
    }
};
exports.getProducts = getProducts;
const getProductById = async (req, res) => {
    try {
        const { id } = req.params;
        const product = await Product_model_1.default.findByPk(id);
        if (!product) {
            res.status(404).json({
                error: 'Product not founded'
            });
        }
        res.json({ data: product });
    }
    catch (error) {
        console.log(error);
    }
};
exports.getProductById = getProductById;
const createProduct = async (req, res) => {
    try {
        const product = new Product_model_1.default(req.body);
        const savedProduct = await product.save();
        res.status(201).json({ data: { savedProduct } });
    }
    catch (error) {
        console.log(error);
    }
};
exports.createProduct = createProduct;
const updateProduct = async (req, res) => {
    const { id } = req.params;
    const product = await Product_model_1.default.findByPk(id);
    if (!product) {
        res.status(404).json({
            error: 'Product not founded'
        });
    }
    //Update
    await product.update(req.body);
    await product.save();
    res.json({ data: product });
};
exports.updateProduct = updateProduct;
const updateStock = async (req, res) => {
    const { id } = req.params;
    const product = await Product_model_1.default.findByPk(id);
    if (!product) {
        res.status(404).json({
            error: 'Product not founded'
        });
    }
    product.stock += 1;
    await product.save();
    res.json({ data: product });
};
exports.updateStock = updateStock;
const deleteProduct = async (req, res) => {
    const { id } = req.params;
    const product = await Product_model_1.default.findByPk(id);
    if (!product) {
        res.status(404).json({
            error: 'Product not founded'
        });
    }
    await product.destroy();
    res.json({ data: product });
};
exports.deleteProduct = deleteProduct;
//# sourceMappingURL=product.js.map