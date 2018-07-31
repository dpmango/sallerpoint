import React, { Component } from 'react';
import sprite from '../images/sprite.svg';

export default class SvgIcon extends Component {
  render(){
    const { name } = this.props;
    return(
      <svg className={"ico ico-" + name}>
        <use xlinkHref={sprite + "#ico-" + name}></use>
      </svg>
    )
  }
}
