import React from 'react'

const FormTotalError = (props) => {
  const excess = (100 - props.total).toFixed(1)
  return (
    <div>
      <h3>Please enter values adding up to 100%</h3>
      {!!props.total && <p>Current: {props.total}%, difference = {excess}</p>}
    </div>
  )
}

export default FormTotalError
