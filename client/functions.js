export function adjustVote (list) {
  const subtotal = Object.values(list).reduce((total, num) => { return (total + num) })
  const adjustedVotes = {}
  for (const party in list) {
    const newVote = (100 / subtotal) * list[party]
    adjustedVotes[party] = Number(newVote)
  }
  return adjustedVotes
}

export function calculateVotes (list, state) {
  for (const party in list) {
    if (list[party] < 5 && !state[party]) {
      list[party] = 0
    }
    // console log which parties get zero'd, do something with this info later
    console.log(party, list[party] < 5 ? (!state[party] ? 'cya' : 'overhang') : '')
  }
  const proportional = adjustVote(list)
  // send this object to a Sainte-Lague table..somehow somewhere??
  console.log(proportional)
}
