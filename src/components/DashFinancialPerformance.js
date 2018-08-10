import React, { Component } from 'react';

import QlikConnector from './QlikConnector';
import DashFilters from '../components/DashFilters';
import DashSection from '../components/DashSection';

export default class DashFinancialPerformance extends Component {
  render(){

    const QlikFilters = [
      // {
      //   name: "DatePicker",
      //   qdt: {
      //     type: 'JQfpVS',
      //     props: {
      //       id: 'PgaKBD'
      //     },
      //   }
      // },
      // {
      //   name: "SellerId",
      //   qdt: {
      //     type: 'WzFqaf',
      //     props: {
      //       id: 'PgaKBD'
      //     },
      //   }
      // },
      // {
      //   name: "MarketPlace",
      //   qdt: {
      //     type: 'UfRGFA',
      //     props: {
      //       id: 'PgaKBD'
      //     },
      //   }
      // },
      // {
      //   name: "SellerSKU",
      //   qdt: {
      //     type: 'jYJJpT',
      //     props: {
      //       id: 'PgaKBD'
      //     },
      //   }
      // }
    ]
    return(
      <React.Fragment>
        <DashFilters filters={QlikFilters} />
        <QlikConnector />
        <div className="dash-container">
          <div className="container container--full">
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
              qdt={{
                type: 'QdtViz',
                props: {
                  id: 'PgaKBD', width: '100%', height: '450px'
                },
              }}
            />
            <DashSection
              name="Profitability Waterfall"
              tooltipContent="Some tooltip content"
              qdt={{
                type: 'QdtViz',
                props: {
                  id: 'PgaKBD', width: '100%', height: '450px'
                },
              }}
            />
            <DashSection
              name="Profitability Waterfall: Detail View"
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
