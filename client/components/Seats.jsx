import React from 'react'

const Seats = (props) => {
  return (
    <ul>
      {props.seats.map((party, idx) => {
        return <li key={idx}>
          {party.party}: {party.allocated}
        </li>
      })}
    </ul>
  )
}

export default Seats
