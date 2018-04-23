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

test('createVoteObject does its thing', () => {
  let obj = {
    act: 0.5,
    greens: 6.3,
    labour: 36.9,
    mana: 0.1,
    maori: 1.2,
    national: 44.4,
    nzfirst: 7.2,
    top: 2.4
  }
  const expected = functions.createVoteObject(obj)
  expect(expected[0].adjusted).toBe(0.5)
})

test('calculateVotes function carries through to createVoteObject', () => {
  let state = {
    act: 1,
    labour: 29,
    national: 45
  }

  let list = {
    act: 0.5,
    greens: 6.3,
    labour: 36.9,
    maori: 1.2,
    national: 44.5,
    nzfirst: 7.2,
    top: 2.4
  }

  const expected = functions.calculateVotes(state, list)
  const calculation = functions.saintLague(expected, 0, 120)
  const act = calculation[0].allocated
  const greens = calculation[1].allocated
  const labour = calculation[2].allocated
  const national = calculation[3].allocated
  const nzfirst = calculation[4].allocated

  expect(act).toBe(1)
  expect(greens).toBe(7)
  expect(labour).toBe(52)
  expect(national).toBe(55)
  expect(nzfirst).toBe(6)
})
