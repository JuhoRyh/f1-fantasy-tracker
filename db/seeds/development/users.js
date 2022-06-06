/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
exports.seed = async function (knex) {
  // Deletes ALL existing entries
  await knex('user').del();
  await knex('user').insert([
    { name: 'Super Tuira F1' },
    { name: 'Scuderia Humalisto' },
    { name: 'Somerniemi F1 Racing Team' },
    { name: 'SoPa F1 team' },
    { name: 'Joensuuntien Jokkismiehet Oy' },
    { name: 'Malminkatu Motorsports F1 Team' },
    { name: 'Pispala Racing Team' },
    { name: 'Haalijoki Racing Team' },
  ]);
};
