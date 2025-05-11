import db from "../config/db";
import { exit } from "node:process"

const clearDB = async () => {
    try {
        await db.sync({ force: true })
        console.log('Data deleted')
        exit(0)
    } catch (error) {
        console.log(error)
        exit(1)
    }
}
clearDB()