import React, { Component } from 'react';
import { Route } from 'react-router-dom';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';

import { setHeaderClass } from '../actions/header';

import DashboardWelcome from '../components/DashboardWelcome';

class Dashboard extends Component {
  static propTypes = {
    setHeaderClass: PropTypes.func.isRequired
  };

  componentDidMount(){
    this.props.setHeaderClass('header--dash-welcome');
  }


  render(){
    return(
      <DashboardWelcome />
    )
  }
}



const mapStateToProps = (state) => (
  {
  }
);

const mapDispatchToProps = (dispatch) => (
  {
    setHeaderClass: (data) => dispatch(setHeaderClass(data))
  }
);

export default connect(mapStateToProps, mapDispatchToProps)(Dashboard);
