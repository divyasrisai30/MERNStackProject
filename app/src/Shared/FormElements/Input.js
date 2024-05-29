import React from "react";

import "./Input.css";

const Input = props =>{
    const element = props.element==='input'? (<input id={props.id} type={props.type} placeholder={props.placeholder}></input>)
    :(<textarea id={props.id} rows={props.rows || 3}></textarea>)
    return (
        <div className={`form-control`}>
            <label htmlFor={props.id}>{props.label}</label>
            {element} 
            {/* Dynamic input using a variable caled element. the element can be a input or textarea where text area is a default with rows of 3 */}
        </div>
        
    )

}
export default Input;