import React from 'react'
import { checkTotal } from './App'
import FormPartyList from './PartyList'

class InputForm extends React.Component {
  constructor(props) {
    super(props)

    this.state = {
      national: 0,
      labour: 0,
      greens: 0,
      nzfirst: 0,
      māori: 0,
      act: 0,
      top: 0,
      mana: 0,
      unitedfuture: 0,
      legalise: 0,
      other: 0
    }
    this.handleSubmit = this.handleSubmit.bind(this)
    this.handleChange = this.handleChange.bind(this)
  }

  handleSubmit(list) {
    this.props.checkTotal(list)
  }

  handleChange(e) {
    this.setState({
      [e.target.name]: Number(e.target.value)
    })
  }

  render() {
    return (
      <div>
        <FormPartyList list={this.state} max='100' handleChange={this.handleChange} 
        handleSubmit={this.handleSubmit} text='Next step: electorates' />
      </div>
    )
  }
}

export default InputForm