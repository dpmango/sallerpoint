import React, { Component } from 'react';
import QdtComponent from '../Qlik/QdtComponent';
import TooltipSimple from '../Helpers/ToolTipSimple';
import ToolTipTabbed from '../Helpers/ToolTipTabbed';

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

        const { name, qdt, toolTipSimple, toolTipTabbed, toolTipHeader, toolTipContent, toolTipTabs, toolTipTabContents } = this.props;
        const { isTabOpened } = this.state

        return (
            <div className={"dash-section" + (isTabOpened ? "" : " is-closed")}>
                <div className="dash-section__heading">
                    <div className={"dash-section__toggler"} onClick={this.toggleTab}>
                        <div className="dash-section__toggler-icon"></div>
                    </div>
                    <h2 className="dash-section__title">{name}</h2>
                    {toolTipSimple && <TooltipSimple toolTipheader={toolTipHeader} toolTipContent={toolTipContent} />}
                    {toolTipTabbed && <ToolTipTabbed toolTipheader={toolTipHeader} toolTipTabs={toolTipTabs} toolTipTabContents={toolTipTabContents} />}
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
