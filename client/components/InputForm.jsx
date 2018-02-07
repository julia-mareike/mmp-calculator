import React from 'react'

class InputForm extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      national: null,
      labour: null,
      greens: null,
      nzfirst: null,
      māori: null,
      act: null,
      top: null,
      mana: null,
      unitedfuture: null,
      legalise: null,
      other: null
    }
  }

  render() {
    // const inputMax = Math.max(100, )

    return (
      <div>
        <form>
          {Object.keys(this.state).map(party => {
            return <p>hi {party}: <input type='number' max='100' name={`${party}`} value={this.state[party]} /></p>
          })}
        </form>


        {/* <a href='#' onClick={hideDetails}>Close</a> */}

        {/* onClick function reduce inputs, if > 100 werror/warning please make sure total adds up to 100 */}
      </div>
    )
  }
}

export default InputForm