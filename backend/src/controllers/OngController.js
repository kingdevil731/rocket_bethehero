const connection = require("../database/connection");
const crypto = require("crypto");

module.exports = {
    async create(request, response) {
        const { name, email, whatsapp, city, uf } = request.body;
        // creation of a random id with 6 bytes to be used as an id
        const id = crypto.randomBytes(6).toString("HEX");
        await connection("ongs").insert({
            id,
            name,
            email,
            whatsapp,
            city,
            uf,
        });
        return response.json({ id });
    },

    async index(request, response) {
        const dados = await connection("ongs").select("*");
        return response.json(dados);
    }
}