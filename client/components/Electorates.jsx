import React from 'react'

class Electorates extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            formError: true
        }
        this.handleChange = this.handleChange.bind(this)
        this.calculateSeats = this.calculateSeats.bind(this)
    }

    handleChange(e) {
        this.setState({
            [e.target.name]: Number(e.target.value)
        })
    }

    calculateSeats() {
        console.log('calculate')
        for (const party in this.props.parties) {
            if (this.props.parties[party] < 5 && this.state[party] === 0) {
                console.log(party, 'cya')
            this.props.parties[party] = 0
            }
        }
    console.log(this.props.parties)
    }

    render() {
        return (
            <div>
                <h3>Calculate electorates</h3>
                <form>
                    {Object.keys(this.props.parties).map(party => {
                        return <p>{party}: <input type='number' min='0' max='71' name={`${party}`} placeholder='0' onChange={this.handleChange} /></p>
                    })}
                    <button type='button' onClick={this.calculateSeats}>Seat allocation</button>
                </form>
            </div>
        )
    }
}

export default Electorates