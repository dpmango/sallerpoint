import React, { Component } from 'react';
import { NavLink } from 'react-router-dom';

export default class DashboardNavTabs extends Component {
  render(){

    const { routes } = this.props;

    return(
      <div className="dash-nav">
        <div className="container">
          <div className="dash-nav__wrapper">
            { routes.map( (route, i) => {
              return(
                <NavLink
                  key={i}
                  to={`${process.env.PUBLIC_URL}${route.path}`}
                  className=""
                  activeClassName="is-active"
                  exact={route.isExact}>
                  {route.name}
                </NavLink>
              )
            }) }
          </div>
        </div>
      </div>
    )
  }
}
