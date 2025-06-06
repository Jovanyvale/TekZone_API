import cors from "cors";
import express from "express";
import swaggerUI from "swagger-ui-express"
import swaggerSpec from './config/swagger';
import router from "./router";
import db from "./config/db";


//DB connecting
async function connectDB() {
    try {
        await db.authenticate()
        await db.sync({ force: true })
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


server.use(cors({ origin: "http://localhost:3000" }));
server.use('/api/products', router)

//Docs
server.use('/docs', swaggerUI.serve, swaggerUI.setup(swaggerSpec))


export default server