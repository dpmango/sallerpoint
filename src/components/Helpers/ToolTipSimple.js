import React, { Component } from 'react';
import SvgIcon from './SvgIcon';
import { Tooltip } from 'react-tippy';

const ToolTipSimpleContent = (props) => {
    const { toolTipheader, toolTipContent } = props
    
    return (
        <div>
            <h3 className="tooltip-header">{toolTipheader}</h3>
            <div dangerouslySetInnerHTML={{ __html: toolTipContent }} />
        </div>
    )
}

export default class ToolTipSimple extends Component {
    render() {
        const { toolTipheader, toolTipContent } = this.props;

        return (
            <Tooltip
                useContext
                html={(<ToolTipSimpleContent toolTipheader={toolTipheader} toolTipContent={toolTipContent} />)}
                position="top"
                distance="10"
                interactive
                theme="light"
                unmountHTMLWhenHide
                arrow="true">
                <div className="tooltip-icon">
                    <SvgIcon name="info-mark" />
                </div>
            </Tooltip>
        )
    }
}
