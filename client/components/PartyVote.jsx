import React from 'react'

class PartyVote extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            // national: 0,
            // labour: 0,
            // greens: 0,
            // nzfirst: 0,
            // māori: 0,
            // act: 0,
            // top: 0,
            // mana: 0,
            // unitedfuture: 0,
            // legalise: 0,
            // other: 0
        }
        // this.handleSubmit = this.props.handleSubmit.bind(this)
    }

    // handleSubmit () {
    //     this.props.checkTotal(this.props.parties)
    //     } 

    render() {
        return (
            <div>
                hi {this.props.formState}
                {/* {this.props.formState} */}
                </div>
            // <form>
            //     {Object.keys(this.props.formState).map(party => {
            //         return (
            //             <p>{party}: <input type='number' min='0' max='100' name={`${party}`} onChange={this.props.handleChange} /></p>
            //         )
            //     })}
            //     <button type='button' onClick={this.handleSubmit}>Calculate</button>
            // </form>
        )
    }
}