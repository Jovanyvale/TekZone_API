"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const server_1 = __importDefault(require("../server"));
const supertest_1 = __importDefault(require("supertest"));
describe('GET /api', () => {
    test("Sould return json files", async () => {
        const res = await (0, supertest_1.default)(server_1.default).get('/api/products');
        expect(res.status).toBe(200);
        expect(res.status).not.toBe(400);
        expect(res.headers['content-type']).toMatch(/json/);
        console.log(res.headers);
    });
});
//# sourceMappingURL=server.test.js.map