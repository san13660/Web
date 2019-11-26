import React, { Component } from 'react';
import './Footer.scss'
import MenuFooter1 from '../menu_footer_1/MenuFooter1';
import gt from './gt.png'

class Footer extends Component {
  render() {
    return (
        <div id='footer'>
            <MenuFooter1 />
            <div id='footer_2'>
                <ul id='menu_4'>
                    <li>Legal</li>
                    <li>Centro de privacidad</li>
                    <li>Política de Privacidad</li>
                    <li>Cookies</li>
                    <li>Sobre los anuncios</li>
                </ul>
                <ul id="trademark">
                    <li className="button">Guatemala <img className='flag' src={gt}></img></li>
                    <li>© 2019 Spotify AB</li>
                </ul>
            </div>
        </div>
      
    );
  }
}

export default Footer;