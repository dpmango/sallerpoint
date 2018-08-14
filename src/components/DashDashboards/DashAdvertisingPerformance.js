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
                                toolTipSimple="true"
                                toolTipHeader="Advertising Impact on Revenue & ACoS"
                                toolTipContent={'Note: Attribution is based on a 7 day attribution model.<br/><br/>Increases in ad spend typically drive increases in sales rank/velocity, thus having a positive impact not only attributed sales, but organic sales as well. We call this impact "organic sales lift".<br/><br/>This chart provides you a full on impact view of your advertising. Not only do you see the directly attributable impact of your ad spend (via Attributed Revenue and ACoS %), but you also get to see the impact of your ad spend on organic sales (via Organic Revenue and True ACoS %).<br/><br/>The term "True ACoS" is the actual advertising cost of sale, when considering both attributed and organic revenue. This is a more accurate measure of the impacts of ad spend than just ACoS alone.'}
                                qdt={{
                                    type: 'QdtViz',
                                    props: {
                                        id: 'Wkzpj', height: '450px'
                                    },
                                }}
                            />
                            <DashSection
                                name="Ad Unit Impressions, Clicks, and Conversions"
                                toolTipSimple="true"
                                toolTipHeader="Impressions, Clicks, and Conversions"
                                dange toolTipContent={"This chart shows the relations between impressions, clicks, and conversions. By looking at all 3 metrics as a components that all work together, we can gather strong insights into how our advertising is performing.<br/><br/>For example, if impressions are trending up, while click-through rate and conversions are trending down, this may be an indication that you're: <br/>[a] driving weak keywords, <br/>[b] increasing ad spend when the demand is unable to keep up, <br/>[c] your listing has not been resonating with customers for some reason (perhaps your rating has decreased), or <br/>[d] your competition has improved significantly.<br/><br/><u>Impressions:</u> How many times your ad is shown. An impression is counted each time your ad is shown to a customer.<br/><br/><u>Click-Through Rate (CTR):</u> A ratio showing how often people who see your ad end up clicking it. Click-Through Rate can be used to gauge how well your keywords and ads are performing.<br/><br/><u>Conversion Rate (CR):</u>The number of purchases per ad click, shown as a percentage."}
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
                            toolTipSimple="true"
                            toolTipHeader="Return on Advertising Spend (RoAS)"
                            toolTipContent={'Note: Attribution is based on a 7 day attribution model.<br/><br/>RoAS is a measure of how much revenue you receive per dollar spent on advertising. The calculation is [Attributed Revenue / Ad Spend]<br/><br/>Similar to True ACoS, the term "True RoAS" is the actual return on ad spend, when considering both attributed and organic revenue. This is a more accurate measure of the impacts of ad spend.'}
                            qdt={{
                                type: 'QdtViz',
                                props: {
                                    id: 'PuuumZF', height: '450px'
                                },
                            }}
                        />

                        <DashSection
                            name="Advertising Performance Detail View"
                            toolTipSimple="true"
                            toolTipHeader="Advertising Performance: Detail View"
                            toolTipContent={"Note: Attribution is based on a 7 day attribution model.<br/><br/>This table provides a SKU-level view of many of the key metrics provided in the advertising performance charts."}
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
