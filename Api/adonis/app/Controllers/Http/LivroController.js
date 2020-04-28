'use strict'

const Livro = use('App/Models/Livro')

class LivroController {

    async index ()
    {
       const livros = await Livro.all()
       return livros
    }

    async show ({ params, response })
    {
        const livro = await Livro.query().where('id', params.id).first()

        if(!livro) {
            return response.status(404).send({
                status: 404, 
                message: 'Livro não encontrado'
            })
        }
        return livro
    }

    async store ({ request })
    {
        const data = request.only(['titulo','autor','edicao'])
        const livro = await Livro.create(data)
        return livro
    }

    async update({ params, request, response }) {

        const livro = await Livro.query().where('id', params.id).first()

        if(!livro) {
            return response.status(404).send({
                status: 404, 
                message: 'Livro não encontrado'
            })
        }

        const data = request.only(['titulo', 'autor', 'edicao'])

        livro.merge(data)

        await livro.save()
        
        return livro
    }

    async destroy({ params, response })
    {
        const livro = await Livro.query().where('id', params.id).first()

        if(!livro) {
            return response.status(404).send({
                status: 404, 
                message: 'Livro não encontrado'
            })
        }

        await livro.delete()
    }
}

module.exports = LivroController
