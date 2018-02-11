import React from 'react'
import { HashRouter as Router, Route, Redirect } from 'react-router-dom'

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
    const total = Object.values(input).reduce((total, num) => { return (total + num) })
    this.setState({
      hundredPercent: (total),
      formError: (total !== 100),
      parties: input
    })
  }

  render() {
    return (
      <Router>
        <div>
          <h1>vote!</h1>
          <Route exact path='/' render={(props) =>
            (this.state.formError ? (<InputForm checkTotal={this.checkTotal} formState={this.state} {...props} />) : (<Redirect to='electorates' />))} />
          <Route path='/electorates' render={(props) => <Electorates parties={this.state.parties} {...props} />} />
        </div>
      </Router>
    )
  }
}

export default App
