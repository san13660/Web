import React from 'react'
import InputTitle from '../input_title/inputTitle.jsx'
import InputMessage from '../input_message/inputMessage.jsx'
import ButtonCreate from '../button_create/buttonCreate.jsx'
import './formMainStyle.css'

function FormMain() {
    return (
        <div>
            <form id="paper" method="get" action="">
                <InputTitle />
                <InputMessage />
                <div id="button-margin">
                    <ButtonCreate />
                </div>
            </form>
        </div>
    )
}

export default FormMain