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

export function calculateVotes (state, list) {
  let overhang = []

  for (let party in list) {
    // if votes < 5 and no electorate, votes = 0, else add to overhang array
    list[party] < 5 ? (!state[party] ? list[party] = 0 : overhang.push([party, state[party]])) : console.log('ok', party)
  }

  const proportional = adjustVotes(list)
  let voteObject = createVoteObject(proportional)
  
  let newObject = {}
  for (let party of overhang) {
    let partyObject = []
    partyObject.push({'party': party[0], 'allocated': party[1]})
    newObject = Object.assign(voteObject, partyObject)
  }
  return newObject
}

export function formula (votes, idx) {
  const result = votes / (idx * 2 + 1)
  return result
}

export function createVoteObject (obj) {
  const array = []
  _.forEach(obj, (votes, party) => {
    if (votes > 0) {
      const newObject = {}
      newObject.party = party
      newObject.votes = votes
      newObject.adjusted = votes
      newObject.allocated = 0
      array.push(newObject)
    }
  })
  return array
}

export function saintLague (totals, idx = 0, seats = 120) {
  if (seats > 0) {
    let array = []
    for (let party of totals) {
      const quotient = formula(party.adjusted, idx)
      array.push(quotient)
    }
    const max = _.max(array) // find the current highest value
    const current = _.indexOf(array, max)
    totals[current].allocated++ // increase seat allocation
    totals[current].adjusted = formula(totals[current].votes, totals[current].allocated) // remove & replace highest value
    saintLague(totals, idx++, --seats) // continue!
  }
  return totals // overhang will still need to be accounted for
}
