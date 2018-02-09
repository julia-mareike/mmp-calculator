import React from 'react'

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
            const newVote = ((100 / subtotal) * list[party]).toFixed(1)
            adjustedVotes[party] = Number(newVote)
        }
        return adjustedVotes
    }

    calculateVotes() {
        console.log('calculate')
        const list = this.props.parties
        for (const party in list) {
            if (list[party] < 5 && this.state[party] === 0) {
                list[party] = 0
            }
            console.log(party, list[party] < 5 ? (!this.state[party] ? 'cya' : 'overhang') : '')
         }
        const proportional = this.adjustVote(list)
        console.log(proportional)
    }


    render() {
        return (
            <div>
                <h3>Calculate electorates</h3>
                <form>
                    <ul>
                        {Object.keys(this.props.parties).map((party, idx) => {
                            return <li key={idx}>{party}: <input type='number' min='0' max='71' name={`${party}`} placeholder='0' onChange={this.handleChange} /></li>
                        })}
                    </ul>
                    <button type='button' onClick={this.calculateVotes}>Seat allocation</button>
                </form>
            </div>
        )
    }
}

export default Electorates