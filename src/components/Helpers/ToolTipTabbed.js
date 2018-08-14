import React, { Component } from 'react';
import SvgIcon from './SvgIcon';
import { Tooltip } from 'react-tippy';
import { Tab, Tabs, TabList, TabPanel } from 'react-tabs';

function createMarkup(html) {
    return { __html: html };
}

const ToolTipTabbedContent = (props) => {
    const { toolTipheader, toolTipTabs, toolTipTabContents } = props

    const tabs = toolTipTabs && toolTipTabs.map((tabName, index) =>
        <Tab key={index.toString()}>{tabName}</Tab>
    );

    const tabPanels = toolTipTabContents && toolTipTabContents.map((content, index) =>
        <TabPanel key={index.toString()}>
            <div dangerouslySetInnerHTML={createMarkup(content)} />
        </TabPanel>
    );

    return (
        <Tabs>
            <h3>{toolTipheader}</h3>
            {
                toolTipTabs &&
                <div>
                    <TabList>
                        {tabs}
                    </TabList>
                    {tabPanels}
                </div>
            }
        </Tabs>
    )
}

export default class ToolTipTabbed extends Component {
    render() {
        const { toolTipheader, toolTipTabs, toolTipTabContents } = this.props;

        return (
            <Tooltip
                html={(<ToolTipTabbedContent toolTipheader={toolTipheader} toolTipTabs={toolTipTabs} toolTipTabContents={toolTipTabContents} />)}
                position="top"
                distance="10"
                interactive
                theme="light"
                unmountHTMLWhenHide="true"
                arrow="true">
                <div className="tooltip-icon">
                    <SvgIcon name="info-mark" />
                </div>
            </Tooltip>
        )
    }
}