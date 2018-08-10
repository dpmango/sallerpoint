import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';

import ImportProgress from '../components/DashCommon/ImportProgress';
import VideoList from '../components/VideoList';
import Alert from '../components/Alert';
import SvgIcon from '../components/Helpers/SvgIcon';

import { setHeaderClass } from '../actions/header';

class DashboardWelcome extends Component {
  static propTypes = {
    setHeaderClass: PropTypes.func.isRequired
  };

  componentDidMount(){
    this.props.setHeaderClass('header--dash-welcome');
  }

  render(){
    return (
      <React.Fragment>
        <ImportProgress />
        <div className="dash">
          <div className="container container--narrow">
            <div className="dash__heading">
              <h1 className="dash__title">Welcome to SellerPoint!</h1>
              <div className="dash__subtitle">While we wait for your data to load, we have some interesting things to show you.</div>
            </div>
            <div className="dash-info">
              <div className="dash-info__icon">
                <SvgIcon name="mail" />
              </div>
              <p>You’ll receive an email once your data import has been completed (5-10 min from now, but can sometimes take as long as an hour)</p>
              <ul>
                <li>Please login with the link in the email</li>
                <li>If you have any issues, please contact <a href="mailto:support@kinimetrix.com">support@kinimetrix.com</a></li>
              </ul>
              <div className="dash-info__cta">
                <Link to={`${process.env.PUBLIC_URL}/dash/dashboards`} className="btn btn-primary"> Go straight to dashboards </Link>
              </div>
            </div>
            <VideoList />
            <Alert
              content="You can safely close this window without any issues, but you will want to watch the tutorials above."
              color="blue" />
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

export default connect(mapStateToProps, mapDispatchToProps)(DashboardWelcome);
