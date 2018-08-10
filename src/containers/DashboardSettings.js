import React, { Component } from 'react';
import { Route, Redirect } from 'react-router-dom';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';

import { setHeaderClass } from '../actions/header';

import DashboardNavTabs from '../components/DashCommon/DashboardNavTabs';
import DashMarketplaceConfig from '../components/DashSettings/DashMarketplaceConfig'
import DashCOGSSetup from '../components/DashSettings/DashCOGSSetup'
import DashSKUASINGrouping from '../components/DashSettings/DashSKUASINGrouping'
import DashNotifications from '../components/DashSettings/DashNotifications'


class DashboardSettings extends Component {
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
        name: 'Marketplace Configuration',
        component: DashMarketplaceConfig
      },
      {
        path: `${match.url}/COGSSetup`,
        name: 'COGS Setup',
        component: DashCOGSSetup
      },
      {
        path: `${match.url}/skuasinGrouping`,
        name: 'SKU/ASIN Grouping',
        component: DashSKUASINGrouping
      },
      {
        path: `${match.url}/notifications`,
        name: 'Notifications',
        component: DashNotifications
      }
    ];

    if ( !this.props.authToken ){
      return (
        <Redirect to={`${process.env.PUBLIC_URL}/login`} />
      )
    }
    return (
      <React.Fragment>
        <DashboardNavTabs
          routes={routes}
          modifierClass="dash-nav--without-progress"
        />
        {routes.map(route => (
          <Route
            key={route.path}
            exact={route.isExact}
            path={process.env.PUBLIC_URL + route.path}
            component={route.component}
          />
        ))}
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

export default connect(mapStateToProps, mapDispatchToProps)(DashboardSettings);
