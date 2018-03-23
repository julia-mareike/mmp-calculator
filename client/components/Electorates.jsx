import React from 'react'
import FormPartyList from './FormPartyList'
import {calculateVotes, saintLague} from '../functions.js'

class Electorates extends React.Component {
  constructor (props) {
    super(props)
    this.state = {
      formError: true
    }
    this.handleChange = this.handleChange.bind(this)
    this.calculateSeats = this.calculateSeats.bind(this)
  }

  handleChange (e) {
    e.preventDefault()
    this.setState({
      [e.target.name]: Number(e.target.value)
    })
  }

  calculateSeats () {
    const votes = calculateVotes(this.state, this.props.parties)
    console.log('votes', votes)
    console.log(saintLague(votes))
  }

  render () {
    return (
      <div>
        <h3>Calculate electorates</h3>
        <form>
          <FormPartyList state={this.state} list={this.props.parties}
            max='71' handleChange={this.handleChange} />
          <button type='button' onClick={this.calculateSeats}>
            {'Seat allocation'}
          </button>
        </form>
      </div>
    )
  }
}

export default Electorates
