import React, { Component } from 'react';
import logo from './logo2.png'
import './MenuFooter1.scss'
import Facebook from './facebook.svg'
import Twitter from './twitter.svg'
import Instagram from './instagram.svg'

class MenuFooter1 extends Component {
  render() {
    return (
        <div id='menu_footer_1'>
            <img id='logo_2' src={logo}></img>
            <div id='menu_column'>
                <ul className='menu_2'>
                    <li><div className='title'>COMPAÑÍA</div></li>
                    <li><div className='button'>Acerca de</div></li>
                    <li><div className='button'>Empleo</div></li>
                    <li><div className='button'>For the Record</div></li>
                </ul>
                <ul className='menu_2'>
                    <li><div className='title'>COMUNIDADES</div></li>
                    <li><div className='button'>Para artistas</div></li>
                    <li><div className='button'>Desarrolladores</div></li>
                    <li><div className='button'>Marcas</div></li>
                    <li><div className='button'>Inversionistas</div></li>
                    <li><div className='button'>Proveedores</div></li>
                </ul>
                <ul className='menu_2'>
                    <li><div className='title'>ENLACES ÚTILES</div></li>
                    <li><div className='button'>Ayuda</div></li>
                    <li><div className='button'>Reproductor web</div></li>
                    <li><div className='button'>App móvil gratis</div></li>
                </ul>
                <ul className='menu_3'>
                    <li>
                        <div className='center icon_fg' />
                        <div className='center icon_bg' />
                        <Instagram className="center logo" width={24} height={24} />
                    </li>
                    <li>
                        <div className='center icon_fg' />
                        <div className='center icon_bg' />
                        <Twitter className="center logo" width={24} height={24} />
                    </li>
                    <li>
                        <div className='center icon_fg' />
                        <div className='center icon_bg' />
                        <Facebook className="center logo" width={24} height={24} />

                    </li>
                </ul>
            </div>
        </div>
    );
  }
}

export default MenuFooter1;