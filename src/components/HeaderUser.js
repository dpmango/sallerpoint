import React, { Component } from 'react'
import SvgIcon from '../components/SvgIcon'

export default class HeaderUser extends Component{

  render(){

    const { isMenuOpened } = this.props

    return(
      <div
        className={"header__user" + ( isMenuOpened ?  " is-active" : "") }
        onClick={this.props.toggleUsermenu}
      >
        <div className="header__user-avatar">
          {/* SOME IMAGE TAG */}
        </div>
        <div className="header__user-name">
          BRITTANY DEMO
        </div>
        <div className={"header__user-dropdown"}>
          <div className="header__user-dropdown-arrow">
            <SvgIcon name="dropdown-arrow" />
          </div>
          <div className="header__dropdown">
            <div className="header__dropdown-menu">
              <li>
                <a href="">Some action</a>
              </li>
              <li>
                <a href="">Some action</a>
              </li>
              <li>
                <a onClick={this.props.logOutUser}>Log out</a>
              </li>
            </div>
          </div>
        </div>
      </div>
    )
  }
}
