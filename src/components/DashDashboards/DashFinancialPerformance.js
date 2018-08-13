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
                            tooltipContent="Some tooltip content"
                            qdt={{
                                type: 'QdtViz',
                                props: {
                                    id: '6b2ba336-808d-4519-bc3c-fa739b48e916', height: '450px'
                                },
                            }}
                        />
                        <DashSection
                            name="Profit Efficiency Trend"
                            qdt={{
                                type: 'QdtViz',
                                props: {
                                    id: 'CGFtRz', height: '156px'
                                },
                            }}
                        />
                        <DashSection
                            name="Profitability Waterfall"
                            tooltipTitle="The profitability waterfall provides a component-level view of how your financials break down – starting from gross revenue, all the way down to your net profits. This will give you the insight you need to understand where your margins are going, and prioritize initiatives to improve your bottom line."
                            qdt={{
                                type: 'QdtViz',
                                props: {
                                    id: 'qbWxrj', height: '450px'
                                },
                            }}
                        />
                        <DashSection
                            name="Profitability Waterfall: Detail View"
                            tooltipTitle="This view provides the SKU-level detail around the profitability components that you can most easily impact."
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
