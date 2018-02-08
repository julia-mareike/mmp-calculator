import React from 'react'

import InputForm from './InputForm'
import FormTotalError from './FormTotalError'
import FormTotalTrue from './FormTotalTrue'

class App extends React.Component {
  constructor(props) {
    super(props)

    this.state = {
      hundredPercent: null,
      formError: true
    }

    this.checkTotal = this.checkTotal.bind(this)
  }

  checkTotal(input) {
    const total = Object.values(input).reduce((total, num) => {return (total + num) })
    console.log(total !== 100)
    this.setState({
      hundredPercent: (total),
      formError: (total !== 100)
    })
    // checkError(total)
  }

  // checkError(percent) {
  //   this.setState({
  //     hundredPercent: null,
  //     formError: (percent > 100)
  //   })
  // }

  render() {
    return (
      <div>
        <h1>vote?</h1>
        <InputForm checkTotal={this.checkTotal} />
        {this.state.formError && <FormTotalError total={this.state.hundredPercent} />}
        {!this.state.formError && <FormTotalTrue />}
      </div>
    )
  }
}

export default App
