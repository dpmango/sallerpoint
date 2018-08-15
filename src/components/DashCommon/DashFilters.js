import React, { Component } from 'react';
import QdtComponent from '../Qlik/QdtComponent';
import DateRangePicker from 'react-bootstrap-daterangepicker';
//import 'bootstrap/dist/css/bootstrap.css';
import 'bootstrap-daterangepicker/daterangepicker.css';

import moment from 'moment';

export default class DashFilters extends Component {
    handleEvent(event, picker) {
        if (event.type == 'apply') { 
            debugger;
        let a = window.qlik.currApp();
        a.field('Date').selectMatch('>=' + picker.startDate._i + '<=' + picker.endDate._i, true);
    }
    }
    
    render() {

        // TODO - not rendering - wrong type or/and props ?
      const  ranges= {
            'Today': [moment(), moment()],
                'Yesterday': [moment().subtract(1, 'days'), moment().subtract(1, 'days')],
                    'Last 7 Days': [moment().subtract(6, 'days'), moment()],
                        'Last 30 Days': [moment().subtract(29, 'days'), moment()],
                            'This Month': [moment().startOf('month'), moment().endOf('month')],
                                'Last Month': [moment().subtract(1, 'month').startOf('month'), moment().subtract(1, 'month').endOf('month')],
      }
        const filters = [
            {
                name: "DataGroupedBy",
                qdt: {
                    type: 'QdtViz',
                    props: {
                        id: 'uFJU', height: '40px', width: '200px'
                    },
                }
            },
           //{
           //     name: "DatePicker",
           //     qdt: {
           //         type: 'QdtViz',
           //         props: {
           //             id: 'JQfpVS', height: '40px',width:'400px'
           //         },
           //     }
           // },
            {
                name: "SellerId",
                qdt: {
                    type: 'QdtViz',
                    props: {
                        id: 'WzFqaf', height: '40px', width: '200px'
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
                        <div>
                            <DateRangePicker onEvent={this.handleEvent} startDate="8/1/2018" endDate="8/18/2018" ranges={ranges} containerClass="react-bootstrap-daterangepicker-container"> 
                            <div className="input-group">
                                <input type="text" className="form-control" value="" />
                                <span className="input-group-btn">
                                    <button className="default date-range-toggle">
                                        <i className="fa fa-calendar" />
                                    </button>
                                </span>
                            </div>
                        </DateRangePicker>
                    </div>
                    </div>
                   
                </div>
            </div>
        )
    }
}
