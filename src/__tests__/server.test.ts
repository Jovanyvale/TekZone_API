import server from "../server";
import request from "supertest"

describe('GET /api', () => {
    test("Sould return json files", async () => {
        const res = await request(server).get('/api/products')

        expect(res.status).toBe(200)
        expect(res.status).not.toBe(400)
        expect(res.headers['content-type']).toMatch(/json/)

        console.log(res.headers)
    })
})