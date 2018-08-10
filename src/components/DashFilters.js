import React, { Component } from 'react';

export default class DashFilters extends Component {
  render(){

    const { routes } = this.props;

    return(
      <div className="dash-filters">
        <div className="container container--full">
          <div className="dash-filters__title">FILTERS</div>
          <div className="dash-filters__wrapper">

          </div>
        </div>
      </div>
    )
  }
}
