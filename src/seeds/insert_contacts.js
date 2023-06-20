/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> } 
 */
exports.seed = async function(knex) {
  // Deletes ALL existing entries
  await knex('contacts').del()
  await knex('contacts').insert([
    {
      id: 1, 
      name: 'jose da silva costa',
      email: 'josedasilvacostacosta@gmail.com',
      telephone: '12991708065',
      message: 'olá josé, gostei muito do artigo sobre firewall linux, gostaria de pedir um artigo sobre comendo o cu de quem esta lendo.'
    },
    {
      id: 2, 
      name: 'Amanda nudes',
      email: 'amandanudes@gmail.com',
      telephone: '12 4002-8922',
      message: 'olá josé, gostei muito do artigo sobre firewall linux, gostaria de pedir um artigo sobre comendo o cu de quem esta lendo.'
    }
  ]);
};
