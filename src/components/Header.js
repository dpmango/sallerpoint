import React from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import { NavLink } from 'react-router-dom';
import onClickOutside from "react-onclickoutside";
import throttle from 'lodash/throttle';

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

    this.scrollWithThrottle = throttle(this.handleScroll, 200);

    this.state = {
      isScrolled: false
    }
  }

  componentDidMount() {
    window.addEventListener('scroll', this.scrollWithThrottle, false);
  };

  componentWillUnmount() {
    window.removeEventListener('scroll', this.scrollWithThrottle, false);
  };

  handleScroll = (event) => {
    var wScroll = window.scrollY

    if ( wScroll > 10 ){
      this.setState({
        isScrolled: true
      })
    } else {
      if ( this.state.isScrolled ){
        this.setState({
          isScrolled: false
        })
      }

    }
  };

  toggleHamburger = () => {
    this.props.menuOpened ? this.props.closeMenu() : this.props.openMenu()
  }

  closeHamburger = () => {
    if (this.props.menuOpened) {
      this.props.closeMenu()
    }
  }

  handleClickOutside = () => {
    this.closeHamburger()
  };

  preloaderOnHover = (component) => {
    component.preload();
  };

  render(){

    const { routes, menuOpened } = this.props;

    return(
      <div className={this.props.stateClass + (this.state.isScrolled ? ' is-scrolled' : '')}>
        <header className='header'>
          <div className="container">
            <div className="header__wrapper">
              <NavLink onClick={this.closeHamburger} to='/' className="header__logo">
                <i className="icon icon-cabin-logo" />
              </NavLink>
              <ul className="header__menu">
                {routes.map((route, i) =>
                  <li key={i}>
                    <NavLink onMouseOver={this.preloaderOnHover.bind(this, route.component)} onClick={this.closeHamburger} exact={route.isExact} className={route.navBarClass} activeClassName='is-active' to={route.path}>{route.name}</NavLink>
                  </li>
                )}
              </ul>
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

        <div className={"mobile-navi " + (menuOpened ? "is-active" : "" ) }>
          <div className="container">
            <div className="mobile-navi__wrapper">
              <ul className="mobile-navi__menu">
                {routes.map(route =>
                  <li key={route.path}>
                    <NavLink onMouseOver={this.preloaderOnHover.bind(this, route.component)} onClick={this.closeHamburger} exact={route.isExact} className={route.navBarClass} activeClassName='is-active' to={route.path}>{route.name}</NavLink>
                  </li>
                )}
              </ul>
            </div>
          </div>

        </div>
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
