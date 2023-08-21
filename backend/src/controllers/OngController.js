const connection = require('../database/connection')
const crypto = require('crypto') // pacote para criar o ID da ONG

module.exports = {
    async index(request, response) {
        const ongs = await connection('ongs').select('*')

        return response.json(ongs)
    },

    async create(request, response) {
        const { name, email, whatsapp, city, uf } = request.body

        const id = crypto.randomBytes(4).toString('HEX')

        /**
            - Método connection.insert() pode demorar um pouco 
            - Retorno do post deve esperar

            - Fazemos isso definindo a função como sendo async e um await no connection.insert()
            - await indica para o node aguardar a finalização
        */
        await connection('ongs').insert({
            id,
            name,
            email,
            whatsapp,
            city,
            uf,
        })

        return response.json({ id })
    },
}