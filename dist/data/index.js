"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const db_1 = __importDefault(require("../config/db"));
const node_process_1 = require("node:process");
const clearDB = async () => {
    try {
        await db_1.default.sync({ force: true });
        console.log('Data deleted');
        (0, node_process_1.exit)(0);
    }
    catch (error) {
        console.log(error);
        (0, node_process_1.exit)(1);
    }
};
clearDB();
//# sourceMappingURL=index.js.map