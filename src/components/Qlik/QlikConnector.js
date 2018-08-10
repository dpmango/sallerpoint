import React from 'react';
import { connect } from 'react-redux'
import api from '../../services/Api';
import axios from 'axios';
import QdtComponents from 'qdt-components';

import { setQlikParams, setQlikConnection, setQlikInstance } from '../../actions/qlik'

// let GlobalQdtComponents = null

class QlikConnector extends React.Component {

  constructor(props){
    super(props)

    this.state = {
      isImageRequested: false,
      isConnected: props.QlikConnected,
      QlikData: props.QlikParams,
      apiError: null
    }
  }

  componentDidMount(){
    this.requestQlikData()
  }

  // first request API
  requestQlikData = () => {

    // if ( this.props.QlikInstance ) {
    if ( window.GlobalQdtComponents || this.props.QlikConnected ) {
      this.connectQlik() // skip API responce and image reguest
      return
    }

    this.props.setQlikConnection(false)

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

        if ( res.data.IsSuccess ){

          this.props.setQlikParams({
            QlikAppId: res.data.QlikAppId,
            QTicket: res.data.QTicket,
            QlikProtocol: res.data.QlikProtocol,
            QSecure: res.data.QSecure,
            QServer: res.data.QServer,
            QPort: res.data.QPort,
            VirtualProxy: res.data.VirtualProxy,
            QUrl: res.data.QUrl,
            IsWebTicketEnabled: res.data.IsWebTicketEnabled
          })

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
          }, () => {
            this.requestQlikImage(); // next step
          })

        } else {
          this.setState({
            apiError: res.data.ErrorMessage
          });
          this.props.setQlikConnection(false)
        }
      })
      .catch(function (error) {
        console.log(error);
      });
  }

  // then get iamge to establish session
  requestQlikImage = () => {

    const { QlikData } = this.state

    const imgForSessionUrl = `${QlikData.QUrl}/resources/img/core/dark_noise_16x16.png?qlikTicket=${QlikData.QTicket}`

    axios
      .get(imgForSessionUrl)
      .then(res => {
        console.log('Qlik responce to GET dark_noise_16x16', res)

        this.setState({
          isImageRequested: true
        }, () => {
          this.connectQlik();
        })
      })
      .catch(function (error) {
        console.log(error);
      });
  }

  // step 3 connect and prepare master component
  connectQlik = () => {
    const { QlikData } = this.state
    const options = {
      config: {
        host: QlikData.QServer,
        secure: QlikData.QSecure,
        port: QlikData.QPort,
        prefix: QlikData.VirtualProxy,
        appId: QlikData.QlikAppId
      },
      connections: {
        vizApi: true,
        // engineApi: true
      }
    }

    // TODO fails with multiple requests

    if ( !window.GlobalQdtComponents ){
      const qdtComponents = new QdtComponents(options.config, options.connections);
      window.GlobalQdtComponents = qdtComponents
      // console.log(qdtComponents)
    }

    // GlobalQdtComponents = qdtComponents

    // const { setQlikInstance } = this.props;
    // let qdtInstance;
    //
    // async function getQdt() {
    //   console.log('called async')
    //   return qdtComponents.qAppPromise
    // }
    // getQdt().then((res) => {
    //   console.log(res)
    //   setQlikInstance(qdtInstance)
    // })

    this.props.setQlikConnection(true)

  }

  // blank render function
  render(){
    return null
  }
}


const mapStateToProps = (state) => ({
  QlikConnected: state.qlik.connected,
  QlikParams: state.qlik.params,
  QlikInstance: state.qlik.instance
});

const mapDispatchToProps = (dispatch) => ({
  setQlikConnection: (data) => dispatch(setQlikConnection(data)),
  setQlikParams: (data) => dispatch(setQlikParams(data)),
  setQlikInstance: (data) => dispatch(setQlikInstance(data)),
});

// export { GlobalQdtComponents }

export default connect(mapStateToProps, mapDispatchToProps)(QlikConnector);
