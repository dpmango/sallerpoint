import React, { Component } from 'react';
import QdtComponent from '../Qlik/QdtComponent';

export default class DashFilters extends Component {
  render(){

    const { filters } = this.props;

    return(
      <div className="dash-filters">
        <div className="container container--full">
          <div className="dash-filters__title">FILTERS</div>
          <div className="dash-filters__wrapper">
          { filters.map( (filter, i) => {
            return(
              <QdtComponent
                key={i}
                type={filter.qdt.type}
                props={filter.qdt.props}
              />
            )
          })}
          </div>
        </div>
      </div>
    )
  }
}
