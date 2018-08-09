import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import ImportProgress from './ImportProgress';
import VideoList from './VideoList';
import Alert from './Alert';
import SvgIcon from './SvgIcon';


export default class DashboardWelcome extends Component {
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
                <Link to={`${process.env.PUBLIC_URL}/dash/index`} className="btn btn-primary"> Go straight to dashboards </Link>
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
