//7º Passo -> Objetivo
const { readFile } = require('fs');
// Função nativa do node que me traz o caminho relativo
const { join } = require('path');
const { promisify } = require('util');

//5º Passo, criamos somente a estrutura
function lerComCallback(callback) {
    readFile(join(__dirname, 'item.json'), (error, result) => {
        if (error) {
            return callback(error);
        }
        const resultado = JSON.parse(result);
        return callback(null, resultado);
    });

}

function lerComPromise() {
    //Convertemos para caso de função que nao segue o padrao de callback
    //neste casos o promisify nao funcionaria

    return new Promise((resolve, reject) => {
        readFile(join('item.json'), (error, resultado) => {
            //fazemos um ternário para retornar a função
            //Se o erro tiver valor terá exceção, caso contrário vai ter sucesso
            const resultadoJson = JSON.parse(resultado);
            return error ? reject(error) : resolve(resultadoJson);
        })
    })
}

function convertendoParaPromise() {
    const lerComCallbackAsync = promisify(lerComCallback);
    return lerComCallbackAsync();
}

module.exports = {
    lerComCallback,
    lerComPromise,
    convertendoParaPromise
}