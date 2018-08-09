import React from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';
import { NavLink } from 'react-router-dom';
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

  // constructor(props){
  //   super(props);
  //
  //   // this.scrollWithThrottle = throttle(this.handleScroll, 200);
  //
  //   // this.state = {
  //   //   isScrolled: false
  //   // }
  // }

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
    this.closeHamburger()
  };

  preloaderOnHover = (component) => {
    component.preload();
  };

  render(){

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
                <Link to={`${process.env.PUBLIC_URL}/dash/index`} className="btn btn-welcome">Go straight to dashboards</Link>
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
