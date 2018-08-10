import React, { Component } from 'react';

export default class DashBusinessResults extends Component {
  render(){

    const { routes } = this.props;

    return(
      <div className="dash-nav">
        <h2>Business results</h2>
      </div>
    )
  }
}
