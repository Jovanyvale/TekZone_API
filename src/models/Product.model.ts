import { Column, Table, Model, DataType, PrimaryKey } from "sequelize-typescript";

@Table({ tableName: 'Products' })

class Product extends Model {
    @Column({
        type: DataType.STRING(100)
    })
    name: string

    @Column({
        type: DataType.STRING(500)
    })
    description: string

    @Column({
        type: DataType.DECIMAL(7, 2)
    })
    price: number

    @Column({
        type: DataType.STRING(100)
    })
    image: string

    @Column({
        type: DataType.INTEGER
    })
    stock: number
}

export default Product