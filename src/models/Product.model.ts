import { Column, Table, Model, DataType, PrimaryKey } from "sequelize-typescript";
import db from "../config/db";
import { Col } from "sequelize/types/utils";

@Table({ tableName: 'Products' })

class Product extends Model {
    @PrimaryKey
    @Column({
        type: DataType.INTEGER

    })
    id: number;

    @Column({
        type: DataType.STRING
    })
    name: string

    @Column({
        type: DataType.STRING
    })
    description: string

    @Column({
        type: DataType.DECIMAL
    })
    price: number

    @Column({
        type: DataType.STRING
    })
    image: string
}




// Product.init({
//     id: {
//         type: DataTypes.INTEGER(),
//         allowNull: false
//     },
//     name: {
//         type: DataTypes.STRING(100),
//         allowNull: false
//     },
//     description: {
//         type: DataTypes.STRING(300)
//     },
//     price: {
//         type: DataTypes.DECIMAL(5, 2)
//     },
//     image: {
//         type: DataTypes.STRING(100)
//     }
// },
//     {
//         sequelize: db,
//         modelName: 'Product'
//     }
// )

export default Product