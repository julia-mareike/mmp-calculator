import React from 'react'

const FormPartyList = (props) => {
  return (
    <ul>
      {Object.keys(props.list).map((party, idx) => {
        return <li key={idx}>
          <input type='checkbox' name={`${party}E`} />
          {party}:{props.list[party]}:
          <input type='range' min='0' max={props.max} name={`${party}`} step='0.1'
            onChange={props.handleChange} value={props.list[party]} />
        </li>
      })}
    </ul>
  )
}

export default FormPartyList
