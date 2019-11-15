import React from 'react'
import './buttonCreateStyle.css'

function ButtonCreate(props) {
    return (
        <div>
            <input onClick={props.onClick} id="button" type="submit" value="Create" />
        </div>
    )
}

export default ButtonCreate