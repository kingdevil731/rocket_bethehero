const connection = require("../database/connection");

module.exports = {
    async create(request, response) {
        const { title, description, value } = request.body;
        const ong_id = request.headers.authorization;
        const [id] = await connection("incidents").insert({
            title,
            description,
            value,
            ong_id,
        });
        return response.json({ id });
    },
    async index(request, response) {
        const { page = 1 } = request.query;

        const [count] = await connection("incidents").count();

        const dados = await connection("incidents")
            // Join = relacionamento
            /*
             * first param = nome da tabela a relacionar
             * second param = dados onde o id na tabela ongs
             * third param = igualdade
             * forth param = com o ong_id da tabela de incidentes/casos
             */
            .join('ongs', 'ongs.id', '=', 'incidents.ong_id')
            .limit(5)
            .offset((page - 1) * 5)
            // Usamos um query mais especifico , caso contrario ira levar todos dados da tabela ongs e sobrepor na resposta da incident
            // 2-6 param e para dizer o que deve ser retornado
            .select(['incidents.*', 'ongs.name', 'ongs.email', 'ongs.whatsapp', 'ongs.city', 'ongs.uf']);

        response.header('X-Total-Count', count['count(*)']);
        return response.json(dados);
    },
    async delete(request, response) {
        const { id } = request.params;
        console.log(id);
        const ong_id = request.headers.authorization;
        console.log(ong_id);

        const i = await connection("incidents").where('id', id).select('ong_id').first();
        console.log(i);
        console.log(i.ong_id);
        console.log(ong_id);

        if (i.ong_id != ong_id) {
            return response.status(401).json({ error: "Operation not permitted" });

        }

        await connection("incidents").where("id", id).delete();

        return response.status(204).send();

    },
};