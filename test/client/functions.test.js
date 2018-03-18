const functions = require('../../client/functions')

test('formula works iteration 1', () => {
  const seats = functions.formula(45.12820513, 0)
  const actual = seats
  expect(actual).toBe(45.12820513)
})

test('formula works iteration 2', () => {
  const seats = functions.formula(45.12820513, 1)
  const actual = Number(seats.toFixed(7))
  const expected = 15.0427350
  expect(actual).toBe(expected)
})

test('saintLague function identifies highest vote', () => {
  let votes = [
    {party: 'national', votes: 45.12820513, adjusted: 45.12820513, allocated: 0},
    {party: 'labour', votes: 43.3846154, adjusted: 43.3846154, allocated: 0},
    {party: 'greens', votes: 6.1538462, adjusted: 6.1538462, allocated: 0},
    {party: 'nzfirst', votes: 5.1282051, adjusted: 5.1282051, allocated: 0},
    {party: 'act', votes: 0.2051282, adjusted: 0.2051282, allocated: 0}
  ]
  const calculation = functions.saintLague(votes, 0, 1)
  const national = calculation[0].allocated
  const labour = calculation[1].allocated
  expect(national).toBe(1)
  expect(labour).toBe(0)
})

test('saintLague function allocates seats accurately', () => {
  let votes = [
    {party: 'national', votes: 45.12820513, adjusted: 45.12820513, allocated: 0},
    {party: 'labour', votes: 43.3846154, adjusted: 43.3846154, allocated: 0},
    {party: 'greens', votes: 6.1538462, adjusted: 6.1538462, allocated: 0},
    {party: 'nzfirst', votes: 5.1282051, adjusted: 5.1282051, allocated: 0},
    {party: 'act', votes: 0.2051282, adjusted: 0.2051282, allocated: 0}
  ]
  const calculation = functions.saintLague(votes, 0, 120)
  const national = calculation[0].allocated
  const labour = calculation[1].allocated
  const greens = calculation[2].allocated
  expect(national).toBe(55)
  expect(labour).toBe(52)
  expect(greens).toBe(7)
})
