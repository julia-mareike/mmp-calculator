import React from 'react'
import {checkTotal} from './App'
import {pastVotes} from '../past-votes'
import FormPartyList from './FormPartyList'
import FormTotalError from './FormTotalError'

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
    e.preventDefault()
    this.setState({
      [e.target.name]: Number(e.target.value)
    })
  }

  render() {
    const state = this.props.formState
    return (
      <div>
        <FormPartyList list={this.state} max='100' handleChange={this.handleChange} 
        handleSubmit={this.handleSubmit} pastVotes={pastVotes} text='Next step: electorates' />
        {state.formError && <FormTotalError total={state.hundredPercent} />}
      </div>
    )
  }
}

export default InputForm