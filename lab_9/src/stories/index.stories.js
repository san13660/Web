import React from 'react';

import { storiesOf } from '@storybook/react';
import { action } from '@storybook/addon-actions';

import ButtonCreate from '../components/button_create/buttonCreate'
import InputMessage from '../components/input_message/inputMessage'
import InputTitle from '../components/input_title/inputTitle'


storiesOf("Create Button", module)
    .add("default", () => (
        <ButtonCreate onClick={action("boton presionado")} />
    ));

storiesOf("Input Message", module)
    .add("vacio", () => (
        <InputMessage />
    ))
    .add("con texto", () => (
        <InputMessage value="Este es un texto de prueba con el proposito de verificar el comportamiento multilinea del textarea." />
    ));;

storiesOf("Input Title", module)
    .addParameters({
        backgrounds: [
            { name: 'black', value: '#000000', default: true },
            { name: 'white', value: '#FFFFFF' },
        ],
    })
    .add("vacio", () => (
        <InputTitle />
    ))
    .add("con texto", () => (
        <InputTitle value="Titulo prueba" />
    ));