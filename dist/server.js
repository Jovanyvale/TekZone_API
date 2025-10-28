"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const cors_1 = __importDefault(require("cors"));
const express_1 = __importDefault(require("express"));
const swagger_ui_express_1 = __importDefault(require("swagger-ui-express"));
const swagger_1 = __importDefault(require("./config/swagger"));
const router_1 = __importDefault(require("./router"));
const db_1 = __importDefault(require("./config/db"));
//DB connecting
async function connectDB() {
    try {
        await db_1.default.authenticate();
        await db_1.default.sync();
        // console.log(colors.green('Successful database connection'))
    }
    catch (error) {
        console.log(error);
        // console.log(colors.red('Error conecting to the database'))
    }
}
connectDB();
const server = (0, express_1.default)();
//Read data
server.use(express_1.default.json());
server.use((0, cors_1.default)({ origin: "https://tekzone-8wobzojzn-jovanyvales-projects.vercel.app" }));
server.use('/api/products', router_1.default);
//Docs
server.use('/docs', swagger_ui_express_1.default.serve, swagger_ui_express_1.default.setup(swagger_1.default));
exports.default = server;
//# sourceMappingURL=server.js.map