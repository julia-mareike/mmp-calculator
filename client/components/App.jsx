import React from 'react'
import {HashRouter as Router, Route, Redirect, Link} from 'react-router-dom'
import {electorate, party} from '../info'
import InputForm from './InputForm'
import Electorates from './Electorates'
import Info from './Info'

const _ = require('lodash')

class App extends React.Component {
  constructor (props) {
    super(props)
    this.state = {
      formError: true
    }
    this.checkTotal = this.checkTotal.bind(this)
  }

  checkTotal (input) {
    const total = _.sum(_.values(input)).toFixed(1)
    this.setState({
      hundredPercent: Number(total),
      formError: Number(total) !== 100,
      parties: input
    })
  }

  render () {
    return (
      <Router>
        <div className='vote'>
          <h1>MMP Calculator</h1>
          <div className='container'>
            <Route exact path='/' render={props =>
              (this.state.formError
                ? (<InputForm checkTotal={this.checkTotal} formState={this.state} />)
                : (<Redirect to='electorates' />))} />
            <Route exact path='/' render={props => <Info text={party} />} />
            <Route path='/electorates' render={props => <Electorates parties={this.state.parties} />} />
            <Route path='/electorates' render={props => <Info text={electorate} />} />
          </div>
          <Link to='/'>Home</Link>
        </div>
      </Router>
    )
  }
}

export default App
