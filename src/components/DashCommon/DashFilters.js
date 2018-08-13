import React, { Component } from 'react';
import QdtComponent from '../Qlik/QdtComponent';

export default class DashFilters extends Component {
    render() {

        // TODO - not rendering - wrong type or/and props ?
        const filters = [
            //{
            //    name: "DatePicker",
            //    qdt: {
            //        type: 'QdtViz',
            //        props: {
            //            id: 'JQfpVS', height: '40px',width:'400px'
            //        },
            //    }
            //},
            {
                name: "DataGroupedBy",
                qdt: {
                    type: 'QdtViz',
                    props: {
                        id: 'FvJhW', height: '40px', width: '200px'
                    },
                }
            },
            {
                name: "SellerId",
                qdt: {
                    type: 'QdtViz',
                    props: {
                        id: 'WzFqaf', height: '44px', width: '200px'
                    },
                }
            },
            {
                name: "MarketPlace",
                qdt: {
                    type: 'QdtViz',
                    props: {
                        id: 'UfRGFA', height: '40px', width: '200px'
                    },
                }
            },
            {
                name: "SellerSKU",
                qdt: {
                    type: 'QdtViz',
                    props: {
                        id: 'jYJJpT', height: '40px', width: '200px'
                    },
                }
            }
        ]

        return (
            <div className="dash-filters">
                <div className="container container--full">
                    <div className="dash-filters__title">FILTERS</div>
                    <div className="dash-filters__wrapper">
                        {filters.map((filter, i) => {
                            return (
                                <QdtComponent
                                    key={i}
                                    type={filter.qdt.type}
                                    props={filter.qdt.props}
                                />
                            )
                        })}
                    </div>
                </div>
            </div>
        )
    }
}
