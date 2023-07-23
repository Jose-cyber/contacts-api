/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> } 
 */
exports.seed = async function(knex) {
  // Deletes ALL existing entries
  await knex('contacts').del()
  await knex('contacts').insert([
    {
      date: "2023-07-22",
      time: "14:30:00",
      name: 'fulano ciclano',
      email: 'fulado.ciclano@gmail.com',
      telephone: '+55 11 40028922',
      message: 'hello, fulano.'
    },
    {
      date: "2023-07-22",
      time: "14:30:00",
      name: 'ciclano de beltrano',
      email: 'ciclano.beltrano@gmail.com',
      telephone: '+55 11 40028922',
      message: 'hello, ciclano.'
    }
  ]);
};
