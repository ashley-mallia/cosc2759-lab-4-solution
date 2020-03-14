const mongoose = require("mongoose");
const request = require("supertest");
const app = require("../../app");

describe('Post endpoint', () => {
    it('should create new task', async () => {
        const res = await request(app)
            .post("/todos/")
            .send({
                name: "valid task name",
                done: false
            });
        
        expect(res.statusCode).toEqual(201);
    })

    it('should return error when invalid name', async()=> {
        const res = await request(app)
            .post("/todos/")
            .send({
                name: "",
                done: false
            });
        
        expect(res.statusCode).toEqual(400);
    })
})