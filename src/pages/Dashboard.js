import React, { Component } from 'react';
import { Route } from 'react-router-dom';
import api from '../services/Api';
import { setHeaderClass } from '../actions/header';

import DashboardWelcome from '../containers/DashboardWelcome';
import DashboardDashboards from '../containers/DashboardDashboards';
import DashboardPlannings from '../containers/DashboardPlannings';
import DashboardSettings from '../containers/DashboardSettings';

class Dashboard extends Component {

  componentDidMount(){
    // this.getTabs();
  }

  getTabs = () => {

    // invalid token error
    api
      .get(`GetTabs`)
      .then((res) => {
        console.log('backend responce to GET GetTabs', res)

        if ( res.data.IsSuccess ){

        } else {

        }
      })
      .catch(function (error) {
        console.log(error);
      });

  }
  render(){
    const { match } = this.props

    return(
      <React.Fragment>
        <Route path={`${match.url}/:action`} component={DashboardSwitch} />
        <Route
          exact
          path={match.url}
          component={DashboardWelcome}
        />
      </React.Fragment>
    )
  }
}


class DashboardSwitch extends React.Component {

  renderAction = () => {
    const { match } = this.props;

    const actionParam = match.params.action;

    switch (actionParam) {
      case 'dashboards':
        return (
          <DashboardDashboards match={match} />
        )
      case 'plannings':
        return (
          <DashboardPlannings match={match} />
        )
      case 'settings':
        return (
          <DashboardSettings match={match} />
        )
      default:
        return <DashboardWelcome />
    }
  }

  render() {
    return (
      <React.Fragment>
        {this.renderAction()}
      </React.Fragment>
    );
  }
}

export default Dashboard
