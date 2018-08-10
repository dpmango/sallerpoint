import React, { Component } from 'react';
import PropTypes from 'prop-types';
import QdtComponents from 'qdt-components';
import api from '../services/Api'
import axios from 'axios';

class QdtComponent extends Component {
  static propTypes = {
    type: PropTypes.string.isRequired,
    props: PropTypes.object.isRequired,
  }

  constructor(props){
    super(props);

    this.state = {
      isImageRequested: false,
      isConnected: false
    }
  }

  componentDidMount() {
    this.requestQlikImage();
  }

  requestQlikImage = () => {
    console.log('doing get resp to img', this.props.QlikData.QTicket)

    const imgForSessionUrl = `${this.props.QlikData.QUrl}/resources/img/core/dark_noise_16x16.png?qlikTicket=${this.props.QlikData.QTicket}`

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
  }

  connectQlik = () => {

    const { QlikData } = this.props
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

    const qdtComponents = new QdtComponents(options.config, options.connections);

    const { type, props } = this.props;
    qdtComponents.render(type, props, this.node);
  }

  render() {

    const { isImageRequested } = this.state;
    return (
      <React.Fragment>
        { isImageRequested &&
          <div ref={(node) => { this.node = node; }} />
        }
      </React.Fragment>
    );
  }
}

export default QdtComponent
