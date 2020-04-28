'use strict'

/** @type {import('@adonisjs/lucid/src/Schema')} */
const Schema = use('Schema')

class LivroSchema extends Schema {
  up () {
    this.create('livros', (table) => {
      table.increments()
      table.string('titulo', 80).notNullable().unique()
      table.string('autor', 80).notNullable().unique()
      table.integer('edicao')
      table.timestamps()
    })
  }

  down () {
    this.drop('livros')
  }
}

module.exports = LivroSchema
