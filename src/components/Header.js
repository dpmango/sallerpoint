import React from 'react';
import { connect } from 'react-redux';
import { Link, NavLink } from 'react-router-dom';
import PropTypes from 'prop-types';
import onClickOutside from "react-onclickoutside";
// import throttle from 'lodash/throttle';

import { OPEN_MENU, CLOSE_MENU } from '../store/ActionTypes';
import SvgIcon from '../components/SvgIcon'

class Header extends React.Component {
  static propTypes = {
    routes: PropTypes.array,
    menuOpened: PropTypes.bool,
    stateClass: PropTypes.string,
    openMenu: PropTypes.func,
    closeMenu: PropTypes.func
  };

  constructor(props){
    super(props);

    // this.scrollWithThrottle = throttle(this.handleScroll, 200);

    this.state = {
      isScrolled: false,
      isMenuOpened: false
    }
  }

  componentDidMount() {
    // window.addEventListener('scroll', this.scrollWithThrottle, false);
  };

  componentWillUnmount() {
    // window.removeEventListener('scroll', this.scrollWithThrottle, false);
  };

  // handleScroll = (event) => {
  //   var wScroll = window.scrollY
  //
  //   if ( wScroll > 10 ){
  //     this.setState({
  //       isScrolled: true
  //     })
  //   } else {
  //     if ( this.state.isScrolled ){
  //       this.setState({
  //         isScrolled: false
  //       })
  //     }
  //   }
  // };

  toggleHamburger = () => {
    this.props.menuOpened ? this.props.closeMenu() : this.props.openMenu()
  }

  closeHamburger = () => {
    if (this.props.menuOpened) {
      this.props.closeMenu()
    }
  }

  handleClickOutside = () => {
    this.closeHamburger();
    this.setState({
      isMenuOpened: false
    })
  };

  preloaderOnHover = (component) => {
    component.preload();
  };

  logOutUser = () => {
    // destroy session

  }

  toggleUsermenu = () => {
    this.setState({
      isMenuOpened: !this.state.isMenuOpened
    })
  }

  render(){

    const { isMenuOpened } = this.state;
    const { menuOpened } = this.props;

    return(
      <div className={this.props.stateClass}>
        <header className='header'>
          <div className="container container--full">
            <div className="header__wrapper">
              <NavLink onClick={this.closeHamburger} to='/' className="header__logo">
                <SvgIcon name="logo" />
              </NavLink>
              <div className="header__welcome-link">
                <Link to={`${process.env.PUBLIC_URL}/dash/dashboards`} className="btn btn-welcome">Go straight to dashboards</Link>
              </div>
              <ul className="header__dash-nav">
                <li>
                  <NavLink to={`${process.env.PUBLIC_URL}/dash/dashboards`} className="" activeClassName="is-active">
                    <div className="header__dash-icon">
                      <SvgIcon name="dash-nav-dashboards"/>
                    </div>
                    <span>Dashboards</span>
                  </NavLink>
                </li>
                <li>
                  <NavLink to={`${process.env.PUBLIC_URL}/dash/plannings`} className="" activeClassName="is-active">
                    <div className="header__dash-icon">
                      <SvgIcon name="dash-nav-planning"/>
                    </div>
                    <span>Planning</span>
                  </NavLink>
                </li>
                <li>
                  <NavLink to={`${process.env.PUBLIC_URL}/dash/settings`} className="" activeClassName="is-active">
                    <div className="header__dash-icon">
                      <SvgIcon name="dash-nav-settings"/>
                    </div>
                    <span>Settings</span>
                  </NavLink>
                </li>
                <li>
                  <NavLink to={`${process.env.PUBLIC_URL}/configuration/cogs`} className="" activeClassName="is-active">
                    <div className="header__dash-icon">
                      <SvgIcon name="dash-nav-dashboards"/>
                    </div>
                    <span>Configuration</span>
                  </NavLink>
                </li>
              </ul>
              <div
                className={"header__user" + ( isMenuOpened ?  " is-active" : "") }
                onClick={this.toggleUsermenu}
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
                        <a href="" onClick={this.logOutUser}>Log out</a>
                      </li>
                    </div>
                  </div>
                </div>
              </div>
              <div className="header__hamburger">
                <div
                  className={"hamburger hamburger--squeeze " + (menuOpened ? "is-active" : "" ) }
                  onClick={this.toggleHamburger}>
                  <div className="hamburger-box">
                    <div className="hamburger-inner">
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </header>
      </div>
    )
  }
};


const mapStateToProps = (state) => ({
  menuOpened: state.header.menuOpened,
  stateClass: state.header.stateClass
});

const mapDispatchToProps = (dispatch) => ({
  openMenu: () => dispatch({ type: OPEN_MENU }),
  closeMenu: () => dispatch({ type: CLOSE_MENU })
});

export default connect(mapStateToProps, mapDispatchToProps, null, {pure:false})(onClickOutside(Header));
