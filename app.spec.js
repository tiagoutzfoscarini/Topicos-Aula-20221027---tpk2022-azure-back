const request=require("supertest");
const app=require("./app");

describe("Conjunto de testes app",()=>{
    it ("Testando GetInfo Endpoint",async()=>{
        //cenário
        const esperado="geekxxx";
        //execução
        const res=await request(app).get("/getInfo");
        
        //validação
        expect(res.body.user).toBe(esperado);
    });
})