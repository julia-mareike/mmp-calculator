import React from 'react'
import FormPartyList from './FormPartyList'
import {calculateVotes} from '../functions.js'

class Electorates extends React.Component {
  constructor (props) {
    super(props)
    this.state = {
      formError: true
    }
    this.handleChange = this.handleChange.bind(this)
  }

  handleChange (e) {
    e.preventDefault()
    this.setState({
      [e.target.name]: Number(e.target.value)
    })
  }

  render () {
    return (
      <div>
        <h3>Calculate electorates</h3>
        <FormPartyList state={this.state} list={this.props.parties}
          max='71' handleChange={this.handleChange} handleSubmit={calculateVotes}
          text='Seat allocation' />
      </div>
    )
  }
}

export default Electorates
