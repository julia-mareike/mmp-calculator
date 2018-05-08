import React from 'react'
import FormPartyList from './FormPartyList'
import FormTotalError from './FormTotalError'

class InputForm extends React.Component {
  constructor (props) {
    super(props)

    this.state = {
      national: 44.4,
      labour: 36.9,
      greens: 6.3,
      nzfirst: 7.2,
      māori: 1.2,
      act: 0.5,
      top: 2.4,
      mana: 0.1,
      unitedfuture: 0.1,
      legalise: 0.3,
      other: 0.6
    }
    this.handleSubmit = this.handleSubmit.bind(this)
    this.handleChange = this.handleChange.bind(this)
  }

  handleSubmit (list) {
    this.props.checkTotal(list)
  }

  handleChange (e) {
    e.preventDefault()
    this.setState({
      [e.target.name]: Number(e.target.value)
    })
  }

  render () {
    const state = this.props.formState
    return (
      <div>
        <form>
          <FormPartyList list={this.state} max='100' handleChange={this.handleChange}
            handleSubmit={this.handleSubmit} />
          <button type='button' onClick={() => this.handleSubmit(this.state)}>
            {'Next step: electorates'}
          </button>
        </form>
        {state.formError && <FormTotalError total={state.hundredPercent} />}
      </div>
    )
  }
}

export default InputForm
