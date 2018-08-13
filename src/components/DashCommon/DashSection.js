import React, { Component } from 'react';
import { Tooltip } from 'react-tippy';
import QdtComponent from '../Qlik/QdtComponent';
import SvgIcon from '../Helpers/SvgIcon';
// import api from '../../services/Api';

export default class DashSection extends Component {

    constructor(props) {
        super(props);

        this.state = {
            isTabOpened: true
        }
    }
    componentDidMount() {
        // this.requestQlikData()
    }

    toggleTab = () => {
        this.setState({
            isTabOpened: !this.state.isTabOpened
        })
    }

    render() {

        const { name, tooltipTitle, tooltipContent, qdt } = this.props;
        const { isTabOpened } = this.state

        return (
            <div className={"dash-section" + (isTabOpened ? "" : " is-closed")}>
                <div className="dash-section__heading">
                    <div className={"dash-section__toggler"} onClick={this.toggleTab}>
                        <div className="dash-section__toggler-icon"></div>
                    </div>
                    <h2 className="dash-section__title">{name}</h2>
                    {(tooltipContent || tooltipTitle) &&
                        <Tooltip
                            title={tooltipTitle}
                            html={tooltipContent}
                            position="top"
                            distance="10"
                            interactive="true"
                            arrow="true">
                            <div className="tooltip-icon">
                                <SvgIcon name="info-mark" />
                            </div>
                        </Tooltip>
                    }
                </div>
                <div className="dash-section__chart">
                    {qdt &&
                        <QdtComponent
                            type={qdt.type}
                            props={qdt.props}
                        />
                    }
                </div>
            </div>
        )
    }
}
