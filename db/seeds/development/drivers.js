/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
exports.seed = async function (knex) {
  // Deletes ALL existing entries
  await knex('driver').del();
  await knex('driver').insert([
    {
      name: 'Max Verstappen',
      team_id: 2,
      points: { 1: 5, 2: 45, 3: 4, 4: 62, 5: 56, 6: 45, 7: 28 },
    },
    {
      name: 'Sergio Perez',
      team_id: 2,
      points: { 1: 4, 2: 22, 3: 35, 4: 44, 5: 28, 6: 49, 7: 46 },
    },
    {
      name: 'Lewis Hamilton',
      team_id: 1,
      points: { 1: 34, 2: 13, 3: 26, 4: 5, 5: 19, 6: 21, 7: 11 },
    },
    {
      name: 'George Russell',
      team_id: 1,
      points: { 1: 28, 2: 26, 3: 33, 4: 33, 5: 36, 6: 33, 7: 26 },
    },
    {
      name: 'Charles Leclerc',
      team_id: 3,
      points: { 1: 49, 2: 41, 3: 49, 4: 30, 5: 50, 6: 5, 7: 22 },
    },
    {
      name: 'Carlos Sainz',
      team_id: 3,
      points: { 1: 32, 2: 27, 3: -5, 4: 7, 5: 31, 6: 25, 7: 34 },
    },
    {
      name: 'Lando Norris',
      team_id: 4,
      points: { 1: 1, 2: 22, 3: 24, 4: 43, 5: -2, 6: 16, 7: 26 },
    },
    {
      name: 'Daniel Ricciardo',
      team_id: 4,
      points: { 1: 13, 2: -8, 3: 18, 4: 5, 5: 8, 6: 2, 7: 5 },
    },
    {
      name: 'Fernando Alonso',
      team_id: 5,
      points: { 1: 9, 2: -3, 3: -5, 4: 2, 5: 5, 6: 14, 7: 19 },
    },
    {
      name: 'Esteban Ocon',
      team_id: 5,
      points: { 1: 20, 2: 21, 3: 20, 4: 13, 5: 18, 6: 24, 7: 1 },
    },
    {
      name: 'Pierre Gasly',
      team_id: 6,
      points: { 1: -4, 2: 17, 3: 14, 4: 13, 5: -1, 6: 5, 7: 15 },
    },
    {
      name: 'Yuki Tsunoda',
      team_id: 6,
      points: { 1: 19, 2: -15, 3: -1, 4: 30, 5: 3, 6: 15, 7: -5 },
    },
    {
      name: 'Sebastian Vettel',
      team_id: 7,
      points: { 1: 4, 2: 15, 3: -7, 4: 24, 5: -5, 6: 17, 7: 10 },
    },
    {
      name: 'Lance Stroll',
      team_id: 7,
      points: { 1: 15, 2: 9, 3: 9, 4: 15, 5: 11, 6: 8, 7: 10 },
    },
    {
      name: 'Alexander Albon',
      team_id: 8,
      points: { 1: 10, 2: 13, 3: 5, 4: 14, 5: 19, 6: 6, 7: -7 },
    },
    {
      name: 'Nicholas Latifi',
      team_id: 8,
      points: { 1: 10, 2: -9, 3: 8, 4: 10, 5: 12, 6: 13, 7: 13 },
    },
    {
      name: 'Valtteri Bottas',
      team_id: 9,
      points: { 1: 22, 2: -2, 3: 20, 4: 34, 5: 17, 6: 23, 7: 26 },
    },
    {
      name: 'Zhou Guanyu',
      team_id: 9,
      points: { 1: 14, 2: 10, 3: 9, 4: 8, 5: -9, 6: -8, 7: 10 },
    },
    {
      name: 'Kevin Magnussen',
      team_id: 10,
      points: { 1: 27, 2: 14, 3: 6, 4: 18, 5: 2, 6: -1, 7: -6 },
    },
    {
      name: 'Mick Schumacher',
      team_id: 10,
      points: { 1: 5, 2: 2, 3: 12, 4: -3, 5: 8, 6: 0, 7: -8 },
    },
  ]);
};
