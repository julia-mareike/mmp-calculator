import React from 'react'
import FormPartyList from './PartyList'
// import { adjustVote, calculateVotes } from '../functions.js'

class Electorates extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            formError: true
        }
        this.handleChange = this.handleChange.bind(this)
        this.calculateVotes = this.calculateVotes.bind(this)
        this.adjustVote = this.adjustVote.bind(this)
    }

    handleChange(e) {
        this.setState({
            [e.target.name]: Number(e.target.value)
        })
    }

    adjustVote(list) {
        const subtotal = Object.values(list).reduce((total, num) => { return (total + num) })
        const adjustedVotes = {}
        for (const party in list) {
            const newVote = (100 / subtotal) * list[party]
            adjustedVotes[party] = Number(newVote)
        }
        return adjustedVotes
    }

    calculateVotes(list, state) {
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

    render() {
        return (
            <div>
                <h3>Calculate electorates</h3>
                <FormPartyList state={this.state} list={this.props.parties} max='71' handleChange={this.handleChange} handleSubmit={this.calculateVotes} text='Seat allocation' />
            </div>
        )
    }
}

export default Electorates