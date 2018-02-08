import React from 'react'
import { checkTotal } from './App'

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

  handleSubmit () {
    this.props.checkTotal(this.state)
    // const total = Object.values(this.state).reduce((total, num) => {return (total + num) })
    // console.log(total)
    } 

  handleChange (e) {
    this.setState({
      [e.target.name]: Number(e.target.value)
    })
  }

  render() {
    // const inputMax = Math.max(100, )

    return (
      <div>
        <form>
          {Object.keys(this.state).map(party => {
            return <p>{party}: <input type='number' min='0' max='100' name={`${party}`} onChange={this.handleChange} /></p>
          })}

        <button type='button' onClick={this.handleSubmit}>Calculate</button>
        </form>
        {/* onClick={handleSubmit} */}
        {/* onClick function reduce inputs, if > 100 error/warning please make sure total adds up to 100 */}
      </div>
    )
  }
}

export default InputForm