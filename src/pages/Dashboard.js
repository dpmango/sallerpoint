import React, { Component } from 'react';
import { Route } from 'react-router-dom';

import DashboardWelcome from '../containers/DashboardWelcome';
import DashboardDashboards from '../containers/DashboardDashboards';
import DashboardPlannings from '../containers/DashboardPlannings';
import DashboardSettings from '../containers/DashboardSettings';

class Dashboard extends Component {

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
          <DashboardDashboards />
        )
      case 'plannings':
        return (
          <DashboardPlannings />
        )
      case 'settings':
        return (
          <DashboardSettings />
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
