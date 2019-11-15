import React from 'react'
import './inputMessageStyle.css'

function InputMessage(props) {
    return (
        <textarea placeholder="Enter something funny." id="text" name="text" rows="4" value={props.value}></textarea>
    )
}

export default InputMessage