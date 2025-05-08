import colors from 'colors'
import express from "express";
import router from "./router";
import db from "./config/db";


//DB connecting
async function connectDB() {
    try {
        await db.authenticate()
        await db.sync()
        // console.log(colors.green('Successful database connection'))
    } catch (error) {
        console.log(error)
        // console.log(colors.red('Error conecting to the database'))
    }
}

connectDB()

const server = express()

//Read data
server.use(express.json())

server.use('/api/products', router)


export default server