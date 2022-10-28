const operacoes=require("./OperacoesAritmeticas");

describe("Testes de operações aritméticas",()=>{

    it ("Soma 1+2 deve retornar 3",async()=>{
        //cenário
        const esperado="5";

        //execução
        const resultado=operacoes.somar(2,3);

        //validação
        expect(resultado).toBe(esperado);
    });

    it ("Subtração 9-7 deve retornar 2",async()=>{
        //cenário
        const esperado="2";

        //execução
        const resultado=operacoes.subtrair(9,7);

        //validação
        expect(resultado).toBe(esperado);
    });

    it ("Multiplicação 2x3 deve retornar 6",async()=>{
        //cenário
        const esperado="6";

        //execução
        const resultado=operacoes.multiplicar(2,3);

        //validação
        expect(resultado).toBe(esperado);
    });

    it ("Divisão 9/3 deve retornar 3",async()=>{
        //cenário
        const esperado="3";

        //execução
        const resultado=operacoes.dividir(9,3);

        //validação
        expect(resultado).toBe(esperado);
    });

})