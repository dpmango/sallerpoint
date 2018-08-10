import React, { Component } from 'react';

import QlikConnector from '../Qlik/QlikConnector';
import DashFilters from '../DashCommon/DashFilters';
import DashSection from '../DashCommon/DashSection';

export default class DashFinancialPerformance extends Component {
  render(){

    // TODO - not rendering - wrong type or/and props ?
    const QlikFilters = [
      {
        name: "DatePicker",
        qdt: {
          type: 'QdtViz',
          props: {
            id: 'JQfpVS'
          },
        }
      },
      {
        name: "SellerId",
        qdt: {
          type: 'QdtViz',
          props: {
            id: 'WzFqaf'
          },
        }
      },
      {
        name: "MarketPlace",
        qdt: {
          type: 'QdtViz',
          props: {
            id: 'UfRGFA'
          },
        }
      },
      {
        name: "SellerSKU",
        qdt: {
          type: 'QdtViz',
          props: {
            id: 'jYJJpT'
          },
        }
      }
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
                  id: 'PgaKBD', height: '450px'
                },
              }}
            />
            <DashSection
              name="Profit Efficiency Trend"
              tooltipContent="Some tooltip content"
              qdt={{
                type: 'QdtViz',
                props: {
                  id: 'PgaKBD', height: '450px'
                },
              }}
            />
            <DashSection
              name="Profitability Waterfall"
              tooltipContent="Some tooltip content"
              qdt={{
                type: 'QdtViz',
                props: {
                  id: 'PgaKBD', height: '450px'
                },
              }}
            />
            <DashSection
              name="Profitability Waterfall: Detail View"
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
