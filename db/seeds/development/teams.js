/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
exports.seed = async function (knex) {
  // Deletes ALL existing entries
  await knex('team').del();
  await knex('team').insert([
    {
      id: 1,
      name: 'Mercedes',
      points: { 1: 57, 2: 34, 3: 64, 4: 31, 5: 40, 6: 49, 7: 42 },
    },
    {
      id: 2,
      name: 'Red Bull',
      points: { 1: 4, 2: 62, 3: 39, 4: 99, 5: 69, 6: 49, 7: 60 },
    },
    {
      id: 3,
      name: 'Ferrari',
      points: { 1: 76, 2: 63, 3: 44, 4: 30, 5: 56, 6: 30, 7: 51 },
    },
    {
      id: 4,
      name: 'McLaren',
      points: { 1: 9, 2: 9, 3: 37, 4: 41, 5: 1, 6: 13, 7: 26 },
    },
    {
      id: 5,
      name: 'Alpine',
      points: { 1: 24, 2: 13, 3: 10, 4: 8, 5: 18, 6: 33, 7: 15 },
    },
    {
      id: 6,
      name: 'AlphaTauri',
      points: { 1: 10, 2: -3, 3: 8, 4: 36, 5: -3, 6: 15, 7: 5 },
    },
    {
      id: 7,
      name: 'Aston Martin',
      points: { 1: 14, 2: 19, 3: -3, 4: 32, 5: 1, 6: 20, 7: 15 },
    },
    {
      id: 8,
      name: 'Williams',
      points: { 1: 15, 2: -1, 3: 8, 4: 17, 5: 26, 6: 14, 7: 1 },
    },
    {
      id: 9,
      name: 'Alfa Romeo',
      points: { 1: 31, 2: 3, 3: 24, 4: 35, 5: 3, 6: 10, 7: 21 },
    },
    {
      id: 10,
      name: 'Haas',
      points: { 1: 27, 2: 11, 3: 13, 4: 8, 5: 5, 6: -6, 7: -16 },
    },
  ]);
};
