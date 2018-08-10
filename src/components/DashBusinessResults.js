import React, { Component } from 'react';

import QlikConnector from './QlikConnector';
import DashFilters from '../components/DashFilters';
import DashSection from '../components/DashSection';

export default class DashBusinessResults extends Component {
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
                name="Gross Sales"
                tooltipContent="Some tooltip content"
                qdt={{
                  type: 'QdtViz',
                  props: {
                    id: 'PgaKBD', width: '100%', height: '450px'
                  },
                }}
              />
              <DashSection
                name="Gross Units Sold"
                tooltipContent="Some tooltip content"
                qdt={{
                  type: 'QdtViz',
                  props: {
                    id: 'PgaKBD', width: '100%', height: '450px'
                  },
                }}
              />
              <DashSection
                name="Average Sale Price"
                tooltipContent="Some tooltip content"
                qdt={{
                  type: 'QdtViz',
                  props: {
                    id: 'PgaKBD', width: '100%', height: '450px'
                  },
                }}
              />
              <DashSection
                name="Refunds Impact on Profitability"
                tooltipContent="Some tooltip content"
                qdt={{
                  type: 'QdtViz',
                  props: {
                    id: 'PgaKBD', width: '100%', height: '450px'
                  },
                }}
              />
            </div>

            <DashSection
              name="SKU Level Aggregated View"
              tooltipContent="Some tooltip content"
              qdt={{
                type: 'QdtViz',
                props: {
                  id: 'PgaKBD', width: '100%', height: '450px'
                },
              }}
            />

          </div>
        </div>
      </React.Fragment>
    )
  }
}
