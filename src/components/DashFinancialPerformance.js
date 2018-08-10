import React, { Component } from 'react';

import DashFilters from '../components/DashFilters';
import DashSection from '../components/DashSection';

export default class DashFinancialPerformance extends Component {
  render(){

    const { routes } = this.props;

    return(
      <React.Fragment>
        <DashFilters />
        <div className="dash-container">
          <div className="container container--full">
            <h5>Financial performance</h5>

            <DashSection
              name="Profitability: Net & Gross"
              tooltipContent="Some tooltip content"
              qdt={{
                type: 'QdtViz',
                props: {
                  id: 'PgaKBD', width: '100%', height: '450px'
                },
              }}
            />
            <DashSection
              name="Profit Efficiency Trend"
              tooltipContent="Some tooltip content"
            />
            <DashSection
              name="Profitability Waterfall"
              tooltipContent="Some tooltip content"
            />
          </div>
        </div>
      </React.Fragment>
    )
  }
}
