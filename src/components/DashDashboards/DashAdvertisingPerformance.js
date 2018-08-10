import React, { Component } from 'react';

import QlikConnector from '../QlikConnector';
import DashFilters from '../DashFilters';
import DashSection from '../DashSection';

export default class DashAdvertisingPerformance extends Component {
  render(){

    const QlikFilters = [

    ]

    return(
      <React.Fragment>
        <DashFilters filters={QlikFilters} />
        <QlikConnector />
        <div className="dash-container">
          <div className="container container--full">
            <div className="dash-grid">
              <DashSection
                name="Advertising Impact on Revenue & ACoS  "
                tooltipContent="Some tooltip content"
                qdt={{
                  type: 'QdtViz',
                  props: {
                    id: 'PgaKBD', height: '450px'
                  },
                }}
              />
              <DashSection
                name="Ad Unit Impressions, Clicks, and Conversions"
                tooltipContent="Some tooltip content"
                qdt={{
                  type: 'QdtViz',
                  props: {
                    id: 'PgaKBD', height: '450px'
                  },
                }}
              />
            </div>

            <DashSection
              name="Return on Advertising Spend (RoAS)"
              tooltipContent="Some tooltip content"
              qdt={{
                type: 'QdtViz',
                props: {
                  id: 'PgaKBD', height: '450px'
                },
              }}
            />

            <DashSection
              name="SKU Level Aggregated View"
              tooltipContent="Some tooltip content"
              qdt={{
                type: 'QdtViz',
                props: {
                  id: 'PgaKBD', height: '450px'
                },
              }}
            />

          </div>
        </div>
      </React.Fragment>
    )
  }
}
