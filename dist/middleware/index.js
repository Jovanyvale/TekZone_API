"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.handleInputErros = void 0;
const express_validator_1 = require("express-validator");
const handleInputErros = async (req, res, next) => {
    let errors = await (0, express_validator_1.validationResult)(req);
    if (!errors.isEmpty()) {
        res.status(400).json({ errors: errors.array() });
        return;
    }
    next();
};
exports.handleInputErros = handleInputErros;
//# sourceMappingURL=index.js.map