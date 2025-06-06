import server from "./server";

const port = process.env.PORT || 3001
server.listen(port, () => {
    console.log(`REST API en el puerto ${port}`)
})

