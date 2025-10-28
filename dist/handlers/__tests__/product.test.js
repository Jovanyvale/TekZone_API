"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const server_1 = __importDefault(require("../../server"));
const supertest_1 = __importDefault(require("supertest"));
describe("POST /api/products", () => {
    test('Product inputs should be correct', async () => {
        const response = await (0, supertest_1.default)(server_1.default).post('/api/products').send({});
    });
    test('Product should be created', async () => {
        const response = await (0, supertest_1.default)(server_1.default).post('/api/products').send({
            name: 'product test',
            price: '10',
            description: 'test',
            image: 'ererrer',
            stock: 10
        });
        expect(response.status).toBe(201);
        expect(response.body).toHaveProperty('data');
        expect(response.status).not.toBe(400);
    });
});
//# sourceMappingURL=product.test.js.map