import React, { Component } from 'react';
import { Redirect } from 'react-router-dom';
import { connect } from 'react-redux';
// import axios from 'axios';
// import api from '../services/Api';
import PropTypes from 'prop-types';

import { setLwaAuth } from '../actions/lwa';

class LWACallback extends Component {
  static propTypes = {
    setLwaAuth: PropTypes.func,
    location: PropTypes.object.isRequired
  };

  constructor(props){
    super(props);

    this.state = {
      shouldRedirect: false,
      authStatus: null
    }
  }

  componentDidMount(){
    this.getLWAToken()
  }

  getLWAToken = () => {
    const redirectResponce = this.props.location.search
    const authCode = this.getQueryVariable(redirectResponce, 'code')
    const authScope = this.getQueryVariable(redirectResponce, 'scope')
    // const ClientID = "amzn1.application-oa2-client.c66f0420a8fc4c13a7abb409399d9944"
    // const RedirectUri = window.location.origin + "/SellerPoint/LWACallback"

    this.props.setLwaAuth({
      code: authCode,
      scope: authScope
    })

    this.setState({
      shouldRedirect: true
    })

    // auth LWA
    // obtain access token

    // axios.post('https://api.amazon.com/auth/o2/token', {
    //     grant_type: 'Authorization_code',
    //     code: authCode,
    //     redirect_uri: RedirectUri,
    //     client_id: ClientID
    //     // client_secret:
    //   })
    //   .then(function (res) {
    //     console.log(res);
    //   })
    //   .catch(function (error) {
    //     console.log(error);
    //   });

  }

  getQueryVariable = (url, variable) => {
    var query = url.substring(1);
    var vars = query.split('&');
    for (var i = 0; i < vars.length; i++) {
      var pair = vars[i].split('=');
      if (decodeURIComponent(pair[0]) === variable) {
        return decodeURIComponent(pair[1]);
      }
    }
    return false
  }

  render() {
    const { shouldRedirect } = this.state;

    if ( shouldRedirect ){
      return <Redirect to={`${process.env.PUBLIC_URL}/signup/step-3`} />
    }

    return (
      <div className="lwa">
        <div className="container">
          <span>Please wait ...</span>
        </div>
      </div>
    );
  }
}

const mapStateToProps = (state) => ({

});

const mapDispatchToProps = (dispatch) => (
  {
    setLwaAuth: (data) => dispatch(setLwaAuth(data)),
  }
);

export default connect(mapStateToProps, mapDispatchToProps)(LWACallback);
