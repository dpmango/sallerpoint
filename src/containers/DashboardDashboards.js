import React, { Component } from 'react';
import { Link, Route, Redirect } from 'react-router-dom';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';

import ImportProgress from '../components/ImportProgress';
import DashboardNavTabs from '../components/DashboardNavTabs';
import DashFinancialPerformance from '../components/DashDashboards/DashFinancialPerformance'
import DashBusinessResults from '../components/DashDashboards/DashBusinessResults'
import DashOperationalPerformance from '../components/DashDashboards/DashOperationalPerformance'
import DashAdvertisingPerformance from '../components/DashDashboards/DashAdvertisingPerformance'

import SvgIcon from '../components/SvgIcon';

import { setHeaderClass } from '../actions/header';

class DashboardDashboards extends Component {
  static propTypes = {
    setHeaderClass: PropTypes.func.isRequired
  };

  componentDidMount(){
    this.props.setHeaderClass('header--dash');
  }

  render(){

    const { match } = this.props // from the router

    const routes = [
      {
        isExact: true,
        path: match.url,
        name: 'Financial Performace',
        component: DashFinancialPerformance
      },
      {
        isExact: false,
        path: `${match.url}/businessResults`,
        name: 'Business Results',
        component: DashBusinessResults
      },
      {
        isExact: false,
        path: `${match.url}/operationalPerformance`,
        name: 'Operational Performance',
        component: DashOperationalPerformance
      },
      {
        isExact: false,
        path: `${match.url}/advertisingPerformance`,
        name: 'Advertising Performance',
        component: DashAdvertisingPerformance
      }
    ];

    if ( !this.props.authToken ){
      return (
        <Redirect to={`${process.env.PUBLIC_URL}/login`} />
      )
    }
    return (
      <React.Fragment>
        <ImportProgress />
        <DashboardNavTabs routes={routes} />

        <div className="dash">
          {routes.map(route => (
            <Route
              key={route.path}
              exact={route.isExact}
              path={process.env.PUBLIC_URL + route.path}
              component={route.component}
            />
          ))}
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

export default connect(mapStateToProps, mapDispatchToProps)(DashboardDashboards);
