const connection = require('../database/connection')

module.exports = {

    async index(request, response) {

        // Pegar o total de casos
        const [count] = await connection('incidents').count()

        const { page = 1 } = request.query // para fazer paginação

        /**
         * Esquema Simples de Paginação
         * 
         * http://localhost:3333/incidents?page=1
         * mostra os 5 primeiros incidents
         * 
         * http://localhost:3333/incidents?page=2
         * mostra os próximos 5 incidents
         * 
         * etc
        */

        const incidents = await connection('incidents')
        .join('ongs', 'ongs.id', '=', 'incidents.ong_id')
        .limit(5) // limitando para buscar 5 incidentes
        .offset((page - 1) * 5)
        .select([
        'incidents.*', 
        'ongs.name', 
        'ongs.email', 
        'ongs.whatsapp', 
        'ongs.city', 
        'ongs.uf'])

        // retornar o total de casos pelo cabeçalho da resposta da requisição
        response.header('X-Total-Count', count['count(*)'])
        return response.json(incidents)
    },

    async create(request, response) {
        const { title, description, value } = request.body

        /**
         * Contexto da requisição está presente no cabeçalho da requisição
            - Dados de autenticação
            - Dados da localização
        */
        const ong_id = request.headers.authorization

        const result = await connection('incidents').insert({
            title,
            description,
            value,
            ong_id,
        })

        const id = result[0]

        return response.json({ id })
    },

    async delete(request, response) {
        const { id } = request.params
        const ong_id = request.headers.authorization

        const incident = await connection('incidents')
        .where('id', id)
        .select('ong_id')
        .first()

        if (incident.ong_id != ong_id) {
            return response.status(401).json({ error: 'Operation not permitted.' })
        }

        await connection('incidents').where('id', id).delete()

        return response.status(204).send()
    }
}