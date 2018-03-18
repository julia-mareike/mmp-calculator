const _ = require('lodash')

export function adjustVotes (list) {
  const subtotal = _.sum(_.values(list))
  const adjustedVotes = {}
  for (let party in list) {
    const newVote = (100 / subtotal) * list[party]
    adjustedVotes[party] = Number(newVote)
  }
  return adjustedVotes
}

export function calculateVotes (list, state) {
  for (let party in list) {
    if (list[party] < 5 && !state[party]) {
      list[party] = 0
    }
    // console log which parties get zero'd, do something with this info later
    console.log(party, list[party] < 5 ? (!state[party] ? 'cya' : 'overhang') : '')
  }
  const proportional = adjustVotes(list)
  // send this object to a Sainte-Lague table..somehow somewhere??
  console.log(proportional)
}

export function formula (votes, idx) {
  const result = votes / (idx * 2 + 1)
  return result
}

export function saintLague (totals, idx, seats) {
  if (seats <= 0) {
    return console.log('done')
  } else {
    let array = []
    for (let party of totals) {
      const quotient = formula(party.adjusted, idx)
      array.push(quotient)
    }
    // find the current highest value
    const max = _.max(array)
    const current = _.indexOf(array, max)
    // increase seat allocation
    totals[current].allocated++
    // remove highest value, replace with next iteration in table based on seats so far
    totals[current].adjusted = formula(totals[current].votes, totals[current].allocated)
    // continue!
    saintLague(totals, idx++, seats - 1)
  }
  return totals
  // overhang will still need to be accounted for
}
