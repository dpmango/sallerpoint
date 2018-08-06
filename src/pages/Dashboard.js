import React, { Component } from 'react';
import { Route } from 'react-router-dom';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';

import { setHeaderClass } from '../actions/header';

import ImportProgress from '../components/ImportProgress';
import VideoList from '../components/VideoList';

class Dashboard extends Component {
  static propTypes = {
    setHeaderClass: PropTypes.func.isRequired
  };

  componentDidMount(){
    this.props.setHeaderClass('header--dash-welcome');
  }


  render(){
    return(
      <React.Fragment>
        <ImportProgress />
        <div className="dash">
          <div className="container container--narrow">
            <div className="dash__heading">
              <h1 className="dash__title">Welcome to SellerPoint!</h1>
              <div className="dash__subtitle">While we wait for your data to load, we have some interesting things to show you.</div>
            </div>

            <VideoList />
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

export default connect(mapStateToProps, mapDispatchToProps)(Dashboard);
