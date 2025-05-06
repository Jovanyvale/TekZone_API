import { Request, Response, NextFunction } from "express"
import { validationResult } from "express-validator"

export const handleInputErros = async (req: Request, res: Response, next: NextFunction) => {
    let errors = await validationResult(req)
    if (!errors.isEmpty()) {
        res.status(400).json({ errors: errors.array() })
        return
    }
    next()
}