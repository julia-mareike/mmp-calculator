import React from 'react'

const FormPartyList = (props) => {
    
    return (
        <form>
            <ul>
                {Object.keys(props.list).map((party, idx) => {
                    return <li key={idx}>
                    {party}: 
                    <input type='number' min='0' max={props.max} name={`${party}`} step='0.1'
                    onChange={props.handleChange} placeholder='0' />
                    {/* placeholder isn't editable anymore? */}
                     {/* placeholder={props.pastVotes[party]} /> */}
                    </li>
                })}
            </ul>
            {/* check if this is bad () => vs .bind() */}
            <button type='button' onClick={() => props.handleSubmit(props.list, props.state)}>
            {props.text}
            </button>
        </form>
    )
}

export default FormPartyList