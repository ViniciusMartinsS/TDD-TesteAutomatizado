//3º Passo, fazer a asserção = verificar o valor esperado e o valor corrente
const { deepEqual } = require('assert');

//6º Passo
const { lerComCallback, lerComPromise, convertendoParaPromise } = require('./index');

//7º Passo, implementar a função objetiva

//4º Passo é rodar o teste no terminal
//5º Montar a implementação estrutural da função no index.js

// 1º Passo é criar suite de teste
describe('Vai executar funções assíncronas', () => {
    //2º Passo, criar o teste que irá falhar
    //Recebemos o DONE
    it('Deve receber valores de arquivo, resolvendo com callback', (done) => {
        const expected = {
            "gender": "Male",
            "hair_color": "Blond",
            "height": "172",
            "homeworld": "https://swapi.co/api/planets/1/",
            "mass": "77",
            "name": "Luke Skywalker",
            "skin_color": "Fair",
            "created": "2014-12-09T13:50:51.644000Z",
            "edited": "2014-12-10T13:52:43.172000Z",
            "starship": {
                "name": "X-wing",
                "model": "T-65 X-wing"
            }
        }
        //6º Passo, chamar a função
        lerComCallback((error, result) => {
            deepEqual(result, expected);
            //NO caso de CALLBACK FUNCTIONS DEVEMOS RECEBER O DONE DO MOCHA DA FUNÇÃO IT, PARA INFORMAR QUE FUNC TERMINOU
            done();
        })
        // * 3º Passo -> Asserção
        //deepEqual(null, expected); Foi pra cima |
    })

    it('Deve receber valores de arquivo, resolvendo com .then/.catch', () => {
        const expected = {
            "gender": "Male",
            "hair_color": "Blond",
            "height": "172",
            "homeworld": "https://swapi.co/api/planets/1/",
            "mass": "77",
            "name": "Luke Skywalker",
            "skin_color": "Fair",
            "created": "2014-12-09T13:50:51.644000Z",
            "edited": "2014-12-10T13:52:43.172000Z",
            "starship": {
                "name": "X-wing",
                "model": "T-65 X-wing"
            }
        }
        // No caso de promises o mocha resolve internamente, retornando a função sem o done
        return lerComPromise().then(resultado => {
            deepEqual(resultado, expected);
        })
    })
    //para usar o await, para guardar valor em uma variável precisamos do async
    it('Deve receber valores de arquivo, resolvendo com asyn/await e convertendo para promise', async () =>{
        const expected = {
            "gender": "Male",
            "hair_color": "Blond",
            "height": "172",
            "homeworld": "https://swapi.co/api/planets/1/",
            "mass": "77",
            "name": "Luke Skywalker",
            "skin_color": "Fair",
            "created": "2014-12-09T13:50:51.644000Z",
            "edited": "2014-12-10T13:52:43.172000Z",
            "starship": {
                "name": "X-wing",
                "model": "T-65 X-wing"
            }
        }
       const resultado =  await convertendoParaPromise();
        deepEqual(resultado, expected);
    })
})

