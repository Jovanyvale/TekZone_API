import { text } from "express";
import server from "../../server";
import request from "supertest";


describe("POST /api/products", () => {
   test('Product inputs should be correct', async () => {
      const response = await request(server).post('/api/products').send({})


   })

   test('Product should be created', async () => {

      const response = await request(server).post('/api/products').send({
         name: 'product test',
         price: '10',
         description: 'test',
         image: 'ererrer',
         stock: 10
      })

      expect(response.status).toBe(201)
      expect(response.body).toHaveProperty('data')
      expect(response.status).not.toBe(400)
   })
})