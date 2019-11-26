import React, { Component } from 'react';
import './Menu.scss'

class Menu extends Component {
  render() {
    return (
        <ul id='menu'>
            <li><div className='button'>Premium</div></li>
            <li><div className='button'>Ayuda</div></li>
            <li><div className='button'>Descargar</div></li>
            <li><div className='separator'>|</div></li>
            <li><div className='button2'>Registrarse</div></li>
            <li><div className='button2'>Iniciar Sesión</div></li>
        </ul>
    );
  }
}

export default Menu;