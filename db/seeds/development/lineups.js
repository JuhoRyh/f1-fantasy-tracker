/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
exports.seed = async function (knex) {
  // Deletes ALL existing entries
  await knex('lineup').del();
  await knex('lineup').insert([
    {
      user_id: 1,
      race_id: 1,
      drivers: { driverIds: [2, 6, 11, 12, 19] },
      team_id: 3,
    },
    {
      user_id: 1,
      race_id: 2,
      drivers: { driverIds: [2, 5, 17, 12, 18] },
      team_id: 3,
    },
  ]);
};
