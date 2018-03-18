const functions = require('../../client/functions')

test('formula works iteration 1', () => {
  const seats = functions.formula(6.1538462, 0)
  const actual = seats
  expect(actual).toBe(6.1538462)
})

test('formula works iteration 2', () => {
  const seats = functions.formula(6.1538462, 1)
  const actual = Number(seats.toFixed(7))
  expect(actual).toBe(2.0512821)
})
