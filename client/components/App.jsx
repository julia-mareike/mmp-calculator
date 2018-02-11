import React from 'react'
import { HashRouter as Router, Route, Redirect } from 'react-router-dom'
import { electorate, party } from '../info'
import InputForm from './InputForm'
import FormTotalError from './FormTotalError'
import Electorates from './Electorates'
import Info from './Info'
// import PartyVoteInfo from './PartyVoteInfo'
// import ElectorateInfo from './ElectorateInfo'

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
        <div className='vote'>
          <h1>vote!</h1>
          <div className='container'>
          <Route exact path='/' render={(props) =>
            (this.state.formError ? (<InputForm checkTotal={this.checkTotal} formState={this.state} {...props} />) : (<Redirect to='electorates' />))} />
           <Route exact path='/' render={props => <Info text={party} />} />
            {/* <Route exact path ='/' component={PartyVoteInfo} /> */}
          <Route path='/electorates' render={(props) => <Electorates parties={this.state.parties} {...props} />} />
          {/* <Route path='/electorates' component={ElectorateInfo} /> */}
          <Route exact path='/electorates' render={props => <Info text={electorate} />} />
        </div>
        </div>
      </Router>
    )
  }
}

export default App
