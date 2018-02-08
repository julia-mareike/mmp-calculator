import React from 'react'

const FormTotalError = (props) => {
return (
    <div>
    <h3>Please enter values adding up to 100%</h3>
    {!!props.total && <p>Current: {props.total} </p>}
    </div>
)
}

export default FormTotalError