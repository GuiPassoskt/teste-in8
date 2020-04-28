'use strict'

/** @type {typeof import('@adonisjs/lucid/src/Lucid/Model')} */
const Model = use('Model')

class Reserva extends Model {
    aluno () {
        return this.belongsTo('App/Models/Aluno')
    }

    livro () {
        this.hasMany('App/Models/Livro')
    }
    
}

module.exports = Reserva
