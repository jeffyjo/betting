import React from 'react'

const FormGroup = (props) => {
    return (
        <div className="form-group">
            <label form={props.id}>{props.label}</label>
            <input id={props.id}/>
        </div>
    )
}

export default FormGroup