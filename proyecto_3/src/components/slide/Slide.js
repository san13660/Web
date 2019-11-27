import React, { Component } from 'react';
import './Slide.scss'

class Slide extends Component {
  constructor(props) {
    super(props)

    this.state = {
      type: props.type,
      title: props.title,
      img: props.img,
      description: props.description,
      techs: props.techs,
      link: props.link
    }
  }

  render() {
    let card_bg_color = 'linear-gradient(rgb(38, 73, 150) -50%, rgb(0, 73, 7) 200%)'

    if(this.state.type === 'Video Game'){
      card_bg_color = 'linear-gradient(rgb(0, 73, 7) -50%, rgb(38, 73, 150) 200%)'
    }

    let techs = []
    for (let i=0; i<this.state.techs.length; i++) {
      techs.push(<li>{this.state.techs[i]}</li>)
    }

    let link= <div className='link_unavailable'>[Link Unavailable]</div>
    
    if(this.state.link){
      link = <a type='button' href={this.state.link} className='link'>See More...</a>
    }

    return (
      <div className='slide' style={{backgroundImage: card_bg_color}}>
        <div className='title'>
          {this.state.title}
        </div>
        <div className='type'>
          {this.state.type}
        </div>
        <img src={this.state.img}></img>
        <div className='description'>
          {this.state.description}
        </div>
        <div className='techs_title'>
          Skills
        </div>
        <ul className='techs'>
          {techs}
        </ul>
          {link}
      </div>
    );
  }
}

export default Slide;