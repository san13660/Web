import React from 'react'
import './inputTitleStyle.css'

function InputTitle(props) {
    return (
        <div id="margin">
            Title: <input id="title" type="text" name="title" value={props.value} />
        </div>
    )
}

export default InputTitle