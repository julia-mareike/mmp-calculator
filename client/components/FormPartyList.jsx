import React from 'react'

const FormPartyList = (props) => {
  return (
    <ul>
      {Object.keys(props.list).map((party, idx) => {
        return <li key={idx}>
          {party}:{props.list[party]}:
          <input type='range' min='0' max={props.max} name={`${party}`} step='0.1'
            onChange={props.handleChange} placeholder='0' />
        </li>
      })}
    </ul>
  )
}

export default FormPartyList
