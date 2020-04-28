'use strict'

const Aluno = use('App/Models/Aluno')

class AlunoController {
    async index ()
    {
        return await Aluno.all()
    }

    async show ({ params, response })
    {
        const aluno = Aluno.query().where('id', params.id).first()
        if (!aluno){
            return response.status(404).send({
                status: 404,
                message: 'Aluno não encontrado'
            })
        }
        return aluno
    }

    async store ({ request })
    {
        const data = request.only(['nome'])
        const aluno = await Aluno.create(data)
        return aluno
    }

    async update ({params, request, response})
    {
        const aluno = await Aluno.query().where('id', params.id).first()

        if(!aluno) {
            return response.status(404).send({
                status: 404, 
                message: 'Aluno não encontrado'
            })
        }

        const data = request.only(['nome'])

        aluno.merge(data)

        await aluno.save()

        return aluno
    }

    async destroy ({ params, response })
    {
        const aluno = await Aluno.query().where('id', params.id).first()
        if (!aluno) {
            return response.status(404).send({
                status: 404,
                message: 'Aluno não encontrado'
            })
        }

        await aluno.delete()
    }
}

module.exports = AlunoController
