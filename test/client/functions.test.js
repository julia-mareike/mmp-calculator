const functions = require('../../client/functions')

test('formula works iteration 1', () => {
  const seats = functions.formula(6.1538462, 0)
  const actual = seats
  expect(actual).toBe(6.1538462)
})

test('formula works iteration 2', () => {
  const seats = functions.formula(6.1538462, 1)
  const actual = Number(seats.toFixed(7))
  const expected = 2.0512821
  expect(actual).toBe(expected)
})

test('saint-lague table identifying highest value', () => {
  let votes = [
    {party: 'act', votes: 0.2051282, seats: 0},
    {party: 'greens', votes: 6.1538462, seats: 0},
    {party: 'labour', votes: 43.3846154, seats: 0},
    {party: 'national', votes: 45.12820513, seats: 0},
    {party: 'nzfirst', votes: 5.1282051, seats: 0}
  ]
  const calculation = functions.saintLague(votes, 0)
  const national = calculation[3].seats
  expect(national).toBe(1)
})
