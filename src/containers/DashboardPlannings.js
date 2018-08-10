import React, { Component } from 'react';
import { Link, Route, Redirect } from 'react-router-dom';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';

import ImportProgress from '../components/ImportProgress';
import SvgIcon from '../components/SvgIcon';

import { setHeaderClass } from '../actions/header';

class DashboardPlannings extends Component {
  static propTypes = {
    setHeaderClass: PropTypes.func.isRequired
  };

  componentDidMount(){
    this.props.setHeaderClass('header--dash');
  }

  render(){
    if ( !this.props.authToken ){
      return (
        <Redirect to={`${process.env.PUBLIC_URL}/login`} />
      )
    }
    
    return (
      <React.Fragment>
        <ImportProgress />
        <div className="dash">
          <div className="container container--narrow">
            <div className="dash__heading">
              <h1 className="dash__title">Plannings page</h1>
            </div>
          </div>
        </div>
      </React.Fragment>
    )
  }
}


const mapStateToProps = (state) => (
  {
    authToken: state.login.authToken
  }
);

const mapDispatchToProps = (dispatch) => (
  {
    setHeaderClass: (data) => dispatch(setHeaderClass(data))
  }
);

export default connect(mapStateToProps, mapDispatchToProps)(DashboardPlannings);
