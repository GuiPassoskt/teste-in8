'use strict'

const Reserva = use('App/Models/Reserva')

class ReservaController {
    async index ()
    {
        return await Reserva.all()
    }

    async show ({ params, response })
    {
        const reserva = Reserva.query().where('id', params.id).first()
        if (!reserva) {
            return response.status(404).send({
                status: 404,
                message: 'Reserva não encontrada'
            })
        }
    }

    async store ({ request })
    {
        const data = request.only(['aluno_id', 'livro_id'])
        const reserva = await Reserva.create(data)
        return reserva
    }

    async update ({ params, request, response })
    {
        const reserva = await Reserva.query().where('id', params.id).first()
        if (!reserva) {
            return response.status(404).send({
                status: 404,
                message: 'Reserva não encontrada'
            })
        }

        const data = request.only(['aluno_id', 'livro_id'])

        reserva.merge(data)

        await reserva.save()

        return reserva
    }

    async destroy ({ params, response })
    {
        const reserva = await Reserva.query().where('id', params.id).first()
        if (!reserva) {
            return response.status(404).send({
                status: 404,
                message: 'Reserva não encontrada'
            })
        }

        await reserva.delete()
    }
}

module.exports = ReservaController
