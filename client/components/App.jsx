import React from 'react'
import { HashRouter as Router, Route } from 'react-router-dom'

import InputForm from './InputForm'
import FormTotalError from './FormTotalError'
import Electorates from './Electorates'

class App extends React.Component {
  constructor(props) {
    super(props)

    this.state = {
      formError: true
    }

    this.checkTotal = this.checkTotal.bind(this)
  }

  checkTotal(input) {
    const total = Object.values(input).reduce((total, num) => {return (total + num) })
    this.setState({
      hundredPercent: (total),
      formError: (total !== 100),
      parties: input
    })
  }

  render() {
    return (
      <div>
        <h1>vote!</h1>
        <InputForm checkTotal={this.checkTotal} />
        {this.state.formError && <FormTotalError total={this.state.hundredPercent} />}
        {!this.state.formError && <Electorates parties={this.state.parties} />}
      </div>
    )
  }
}

export default App
