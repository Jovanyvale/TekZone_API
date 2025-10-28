import { Model } from "sequelize-typescript";
declare class Product extends Model {
    name: string;
    description: string;
    price: number;
    category: string;
    image: string;
    stock: number;
}
export default Product;
