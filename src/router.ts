import { Router } from "express";
const router = Router()

//Routing 
router.get('/', (req, res) => {
    res.json(`Hola mundo en express`)
})

router.patch('/', (req, res) => {
    res.json('patch')
})

router.delete('/', (req, res) => {
    res.json(`Deletye`)
})

router.post('/', (req, res) => {
    res.json(`post`)
})

export default router