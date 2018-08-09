import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';

import ImportProgress from '../components/ImportProgress';
import SvgIcon from '../components/SvgIcon';

import { setHeaderClass } from '../actions/header';

class DashboardSettings extends Component {
  static propTypes = {
    setHeaderClass: PropTypes.func.isRequired
  };

  componentDidMount(){
    this.props.setHeaderClass('header--dash');
  }

  render(){
    return (
      <React.Fragment>
        <ImportProgress />
        <div className="dash">
          <div className="container container--narrow">
            <div className="dash__heading">
              <h1 className="dash__title">Settings page</h1>
            </div>
          </div>
        </div>
      </React.Fragment>
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

export default connect(mapStateToProps, mapDispatchToProps)(DashboardSettings);
