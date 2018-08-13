import React, { Component } from 'react';

import QlikConnector from '../Qlik/QlikConnector';
import DashFilters from '../DashCommon/DashFilters';
import DashSection from '../DashCommon/DashSection';

export default class DashOperationalPerformance extends Component {
    render() {
        return (
            <React.Fragment>
                <QlikConnector />
                <DashFilters />
                <div className="dash-container">
                    <div className="container container--full">
                        <DashSection
                            name="Operational Performance Metrics"
                            tooltipContent="Some tooltip content"
                            qdt={{
                                type: 'QdtViz',
                                props: {
                                    id: 'vpKKL', height: '450px'
                                },
                            }}
                        />
                        <DashSection
                            name="SKU Level Aggregated View"
                            tooltipContent="Some tooltip content"
                            qdt={{
                                type: 'QdtViz',
                                props: {
                                    id: 'FYTCf', height: '450px'
                                },
                            }}
                        />
                    </div>
                </div>
            </React.Fragment>
        )
    }
}
