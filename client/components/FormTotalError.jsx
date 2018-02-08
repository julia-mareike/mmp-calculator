import React from 'react'

const FormTotalError = (props) => {
    const excess = props.total - 100 
return (
    <div>
    <h3>Please enter values adding up to 100%</h3>
    {!!props.total && <p>Current: {props.total}%, difference = {excess}</p>}
    </div>
)
}

export default FormTotalError