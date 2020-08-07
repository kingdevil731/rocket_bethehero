const connection = require("../database/connection");

module.exports = {
    // obter todos casos da ong especifica
    /*
    async index(request, response) {
        //obter o id da ong do url/parametro usando a desestruturacao
        const { id } = request.params;
        const dados = await connection("incidents").select("*").where('ong_id', id);
        // Retorna da resposta em formato Json
        return response.json(dados);
    },*/
    async index(request, response) {
        //obter o id da ong do url/parametro usando a desestruturacao
        const ong_id = request.headers.authorization;
        const dados = await connection("incidents").where('ong_id', ong_id).select('*');
        // Retorna da resposta em formato Json
        return response.json(dados);
    }
}