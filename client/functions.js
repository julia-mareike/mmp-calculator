export function adjustVote(list) {
    const subtotal = Object.values(list).reduce((total, num) => { return (total + num) })
    const adjustedVotes = {}
    for (const party in list) {
        const newVote = (100 / subtotal) * list[party]
        adjustedVotes[party] = Number(newVote)
    }
    return adjustedVotes
}

export function calculateVotes(list, state) {
    // const list = this.props.parties
    for (const party in list) {
        if (list[party] < 5 && state[party] === 0) {
            list[party] = 0
        }
        // console log which parties get zero'd
        console.log(party, list[party] < 5 ? (!state[party] ? 'cya' : 'overhang') : '')
     }
    const proportional = this.adjustVote(list)
   // send this object to a Sainte-Lague table..somehow??
    console.log(proportional)
}