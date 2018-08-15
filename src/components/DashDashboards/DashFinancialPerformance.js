import React, { Component } from 'react';

import QlikConnector from '../Qlik/QlikConnector';
import DashFilters from '../DashCommon/DashFilters';
import DashSection from '../DashCommon/DashSection';

export default class DashFinancialPerformance extends Component {
    render() {
        return (
            <React.Fragment>
                <QlikConnector />
                <DashFilters />

                <div className="dash-container">
                    <div className="container container--full">
                        <DashSection
                            name="Profitability: Net & Gross"
                            toolTipTabbed="true"
                            toolTipHeader="Profitability Metrics"
                            toolTipTabs={['Gross Profit', 'Net Profit']}
                            toolTipTabContents={['Gross Profit is a measure of the profit that is made after deducing the costs of creating and manufacturing the products. This is calculated by taking Net Revenue and subtracting out the COGS (cost of goods sold).',
                                'Net Profit is the bottom line profitability of selling products. This includes everything including commissions, fees, adjustments, advertising costs, etc. This is calculated by taking Gross Profit and subtracting out any additional costs that a seller may incur to sell an item.']}
                            qdt={{
                                type: 'QdtViz',
                                props: {
                                    id: '6b2ba336-808d-4519-bc3c-fa739b48e916', height: '450px'
                                },
                            }}
                        />
                        <DashSection
                            name="Profit Efficiency Trends"
                            toolTipTabbed="true"
                            toolTipHeader="Profitability Metrics"
                            toolTipTabs={['Profit Efficiency', 'Gross Margin %']}
                            toolTipTabContents={['Net Profit as a % of Gross Profit. This reflects Amazon fees, advertising spend, and refund fee adjustments, among several other components . Many of these have a controllable impact on profitability.',
                                "Gross Margin % is a measure of the health of the first step of controlling profitability. It's calculated as product COGS as a % of product sales."]}
                            qdt={{
                                type: 'QdtViz',
                                props: {
                                    id: 'QrVLDbS', height: '156px'
                                },
                            }}
                        />
                        <DashSection
                            name="Profitability Waterfall"
                            toolTipSimple="true"
                            toolTipHeader="Profitability Metrics"
                            toolTipContent="The profitability waterfall provides a component-level view of how your financials break down - starting from gross revenue, all the way down to your net profits. This will give you the insight you need to understand where your margins are going, and prioritize initiatives to improve your bottom line."
                            qdt={{
                                type: 'QdtViz',
                                props: {
                                    id: 'qbWxrj', height: '450px'
                                },
                            }}
                        />
                        <DashSection
                            name="Profitability Waterfall: Detail View"
                            toolTipSimple="true"
                            toolTipHeader="Profitability Waterfall: Detail View"
                            toolTipContent="This view provides the SKU-level detail around the profitability components that you can most easily impact."
                            qdt={{
                                type: 'QdtViz',
                                props: {
                                    id: 'NdYEK', height: '450px'
                                },
                            }}
                        />
                    </div>
                </div>
            </React.Fragment>
        )
    }
}
