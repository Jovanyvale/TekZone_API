import { Column, Table, Model, DataType } from "sequelize-typescript";

@Table({ tableName: 'Products' })

class Product extends Model {
    @Column({
        type: DataType.STRING(100)
    })
    declare name: string

    @Column({
        type: DataType.STRING(500)
    })
    declare description: string

    @Column({
        type: DataType.DECIMAL(7, 2)
    })
    declare price: number

    @Column({
        type: DataType.STRING(100)
    })
    declare image: string

    @Column({
        type: DataType.INTEGER
    })
    declare stock: number
}

export default Product