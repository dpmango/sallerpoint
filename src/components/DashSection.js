import React, { Component } from 'react';
import {Tooltip} from 'react-tippy';
import QdtComponent from './QdtComponent';
import SvgIcon from './SvgIcon';
import api from '../services/Api';

export default class DashSection extends Component {

  constructor(props){
    super(props);

    this.state = {
      QlikData: null,
      apiError: null
    }
  }
  componentDidMount(){
    this.requestQlikData()
  }

  requestQlikData = () => {
    api
      .get(`GetSellerPointTicketDetails`)
      .then((res) => {
        console.log('backend responce to Get GetSellerPointTicketDetails', res)

        // "{
        //     ""QlikAppId"": ""e86edb9d-dd20-4ecb-82ac-88b5ab79f25a"",
        //     ""QTicket"": ""pOwJQlIRQff_y68x"",
        //     ""QlikProtocol"": ""https"",
        //     ""QSecure"": true,
        //     ""QServer"": ""qa.kinimetrix.com"",
        //     ""QPort"": ""4443"",
        //     ""VirtualProxy"": ""sellerpoint"",
        //     ""QUrl"": ""https://qa.kinimetrix.com:4443/sellerpoint"",
        //     ""IsWebTicketEnabled"": ""Y"",
        //     ""IsSuccess"": true,
        //     ""ErrorMessage"": null
        // }"

        this.setState({
          QlikData: {
            QlikAppId: res.data.QlikAppId,
            QTicket: res.data.QTicket,
            QlikProtocol: res.data.QlikProtocol,
            QSecure: res.data.QSecure,
            QServer: res.data.QServer,
            QPort: res.data.QPort,
            VirtualProxy: res.data.VirtualProxy,
            QUrl: res.data.QUrl,
            IsWebTicketEnabled: res.data.IsWebTicketEnabled
          }
        })

        if ( res.data.IsSuccess ){

        } else {
          this.setState({
            apiError: res.data.ErrorMessage
          })
        }
      })
      .catch(function (error) {
        console.log(error);
      });
  }

  render(){

    const { name, tooltipContent, qdt } = this.props;
    const { QlikData, apiError } = this.state

    return(
      <div className="dash-section">
        <div className="dash-section__heading">
          <h2 className="dash-sectioon__title">{name}</h2>
          { tooltipContent &&
            <Tooltip
              title={tooltipContent}
              position="top"
              distance="10"
              arrow="true">
              <div className="tooltip-icon">
                <SvgIcon name="info-mark" />
              </div>
            </Tooltip>
          }
          { apiError &&
            <span className="ui-input-validation">{apiError}</span>
          }
        </div>
        <div className="dash-section__chart">
          { (qdt && QlikData) &&
            <QdtComponent
              QlikData={QlikData}
              type={qdt.type}
              props={qdt.props}
            />
          }
        </div>
      </div>
    )
  }
}
