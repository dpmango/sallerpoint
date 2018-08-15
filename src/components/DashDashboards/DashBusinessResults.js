import React, { Component } from 'react';

import QlikConnector from '../Qlik/QlikConnector';
import DashFilters from '../DashCommon/DashFilters';
import DashSection from '../DashCommon/DashSection';

export default class DashBusinessResults extends Component {
    render() {
        return (
            <React.Fragment>
                <QlikConnector />
                <DashFilters />
                <div className="dash-container">
                    <div className="container container--full">
                        <div className="dash-grid">
                            <DashSection
                                name="Gross Sales"
                                toolTipSimple="true"
                                toolTipHeader="Gross Sales"
                                toolTipContent="Gross Sales are a measure of how much revenue you've generated from sales of your items. This does not include the impacts of shipping revenue, tax revenue, refunds, or costs."
                                qdt={{
                                    type: 'QdtViz',
                                    props: {
                                        id: 'PgaKBD', height: '450px'
                                    },
                                }}
                            />
                            <DashSection
                                name="Gross Units Sold"
                                toolTipSimple="true"
                                toolTipHeader="Gross Units Sold"
                                toolTipContent="Gross Units Sold are a measure of how many units of product you're selling and shipping out to your customers. This does not include the impact of refunds and returns."
                                qdt={{
                                    type: 'QdtViz',
                                    props: {
                                        id: 'BBPRj', height: '450px'
                                    },
                                }}
                            />
                            <DashSection
                                name="Average Sale Price (including promotions)"
                                toolTipSimple="true"
                                toolTipHeader="Average Sale Price (including promotions)"
                                toolTipContent="Average Sale Price is a weighted average measure of the prices you've been charging for your products over time. This includes promotions, so this is a measure of the true sales price."
                                qdt={{
                                    type: 'QdtViz',
                                    props: {
                                        id: 'KMvn', height: '450px'
                                    },
                                }}
                            />
                            <DashSection
                                name="Refunds Impact on Profitability"
                                toolTipTabbed="true"
                                toolTipHeader="Profitability Metrics"
                                toolTipTabs={['Net Margin vs Net Margin (without refunds)', '% of Orders Refunded']}
                                toolTipTabContents={['This chart provides a view of your profitability, along with the impacts that returns/refunds have on your profitability. Having a significant number of returns/refunds will have a severe impact on your bottom line. <br/><br/>In this chart, the impacts of refunds are allocated back to the date of the initial order, rather than the date that the refund/return was issued. This allows you to see an accurate snapshot of when issues actually occurred.',
                                    'This metric gives you visibility into what percentage of orders in a given time period had a return or refund associated with it.<br/><br/>In this chart, the impacts of refunds are allocated back to the date of the initial order, rather than the date that the refund/return was issued. This allows you to see an accurate snapshot of when issues actually occurred.']}
                                qdt={{
                                    type: 'QdtViz',
                                    props: {
                                        id: 'exTHzKy', height: '450px'
                                    },
                                }}
                            />
                        </div>
                        <DashSection
                            name="SKU Level Aggregated View"
                            qdt={{
                                type: 'QdtViz',
                                props: {
                                    id: 'WZRhBcj', height: '450px'
                                },
                            }}
                        />

                    </div>
                </div>
            </React.Fragment>
        )
    }
}
