'use strict'

/** @type {import('@adonisjs/lucid/src/Schema')} */
const Schema = use('Schema')

class ReservaSchema extends Schema {
  up () {
    this.create('reservas', (table) => {
      table.increments()
      table.integer('aluno_id').unsigned().references('id').inTable('alunos')
      table.integer('livro_id').unsigned().references('id').inTable('livros')
      table.timestamps()
    })
  }

  down () {
    this.drop('reservas')
  }
}

module.exports = ReservaSchema
