import React, { Component } from 'react';

import QlikConnector from '../Qlik/QlikConnector';
import DashFilters from '../DashCommon/DashFilters';
import DashSection from '../DashCommon/DashSection';

export default class DashAdvertisingPerformance extends Component {
    render() {
        const QlikFilters = []

        return (
            <React.Fragment>
                <QlikConnector />
                <DashFilters filters={QlikFilters} />

                <div className="dash-container">
                    <div className="container container--full">
                        <div className="dash-grid">
                            <DashSection
                                name="Advertising Impact on Revenue & ACoS  "
                                tooltipContent="Some tooltip content"
                                qdt={{
                                    type: 'QdtViz',
                                    props: {
                                        id: 'Wkzpj', height: '450px'
                                    },
                                }}
                            />
                            <DashSection
                                name="Ad Unit Impressions, Clicks, and Conversions"
                                tooltipContent="Some tooltip content"
                                qdt={{
                                    type: 'QdtViz',
                                    props: {
                                        id: 'NyefdnX', height: '450px'
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
                                    id: 'PuuumZF', height: '450px'
                                },
                            }}
                        />

                        <DashSection
                            name="Advertising Performance Detail View"
                            tooltipContent="Some tooltip content"
                            qdt={{
                                type: 'QdtViz',
                                props: {
                                    id: 'eALVN', height: '450px'
                                },
                            }}
                        />

                    </div>
                </div>
            </React.Fragment>
        )
    }
}
