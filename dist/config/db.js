"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const sequelize_typescript_1 = require("sequelize-typescript");
const dotenv_1 = __importDefault(require("dotenv"));
dotenv_1.default.config();
const db = new sequelize_typescript_1.Sequelize(process.env.DATABASE_URL, {
    dialect: "postgres",
    models: [__dirname + '/../models/**/*.ts'],
    logging: false
});
exports.default = db;
//# sourceMappingURL=db.js.map