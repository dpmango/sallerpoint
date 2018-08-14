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
                            toolTipSimple="true"
                            toolTipHeader="Operational Performance Metrics"
                            toolTipContent={"These metrics give you a view into the trend of various operational metrics. The metrics included here are those that you can have an impact on by adjusting your operational strategy. <br/><br/>When lines trend up, that is an indicator that your costs are increasing. You can look into the SKU-level views to determine the root cause. <br/><br/>When lines trend down, that is an indicator that your costs are decreasing."}
                            qdt={{
                                type: 'QdtViz',
                                props: {
                                    id: 'vpKKL', height: '450px'
                                },
                            }}
                        />
                        <DashSection
                            name="SKU Level Aggregated View"
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
