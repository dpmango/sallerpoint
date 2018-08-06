import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Redirect } from 'react-router-dom';
import PropTypes from 'prop-types';
import { setSignupStep, setSignupFields } from '../actions/signup';
// import SvgIcon from '../components/SvgIcon';
import FormLoader from '../components/FormLoader';
import api from '../services/Api'

class SignupStep3 extends Component {
  static propTypes = {
    setSignupStep: PropTypes.func,
    setSignupFields: PropTypes.func
  };

  contextTypes: {
    router: React.PropTypes.func
  }

  constructor(props){
    super(props)

    this.state = {
      connectedId: [],
      shouldRedirect: false,
      isFormSubmited: false
    }
  }

  connectMarketplace = (marketPlaceId, sellerId) => {
    const { LWA, signupId } = this.props;
    const options = this.state.connectedId

    if ( !LWA.resp.code ){
      this.LWAAuth();
    } else {

      this.setState({
        isFormSubmited: true
      })

      const obj = {
        code: LWA.resp.code,
        scope: LWA.resp.scope,
        clientId: signupId,
        sellerId: sellerId
      }

      console.log(obj)
      
      api
        .post(`ConnectAdvertisingData`, obj)
        .then((res) => {
          console.log('backend responce to POST ConnectAdvertisingData', res)

          if ( res.IsSuccess ){
            options.push(marketPlaceId) // only push as it's imposible to deselect in design

            this.setState({
              connectedId: options
            })
          } else {
            // refresh token
            this.LWAAuth();
          }

          this.setState({
            isFormSubmited: false
          })

        })
        .catch(function (error) {
          console.log(error);
        });

    }
  }

  LWAAuth = () => {
    // "On button click redirect user to below URL where user enters his LWA credentials

    const ClientID = "amzn1.application-oa2-client.c66f0420a8fc4c13a7abb409399d9944"
    const RedirectUri = window.location.origin + "/SellerPoint/LWACallback"
    window.location.href = `https://www.amazon.com/ap/oa?client_id=${ClientID}&scope=cpc_advertising:campaign_management&response_type=code&redirect_uri=${RedirectUri}`

  }

  compleateSignup = () => {
    // this.props.setSignupStep(1);

    this.setState({
      shouldRedirect: true
    })
  }

  render(){
    const { connectedId, shouldRedirect, isFormSubmited } = this.state;
    const { signupFields } = this.props;

    if ( shouldRedirect ){
      return <Redirect to={`${process.env.PUBLIC_URL}/dash`} />
    }

    const tableHeads = [
      "Marketplace Name",
      "Seller ID",
      "MWS Status (SellerPoint)",
      "Advertising Data Status"
    ]

    return(
      <div className="signup__container signup__container--wide">
        <div className={"loader-container " + (isFormSubmited ? "is-loading" : null) }>
          <FormLoader />
            <div className="signup__form">
          <div className="signup__heading">Set up your advertising data by connecting your Sponsored Products so we can help you manage the effectiveness of your campaigns</div>
          <table className="signup__table">
            <thead>
              <tr>
                { tableHeads.map( (name,index) => {
                  return ( <td key={index}>{name}</td> )
                }) }
              </tr>
            </thead>
            <tbody>
              { signupFields.connected_marketplaces.map( (mp, index) => {
                const isConnected = connectedId.indexOf(mp.marketPlaceId) !== -1
                return (
                  <tr key={index}>
                    <td><span className="for-desktop">{tableHeads[0]}</span>{mp.name}</td>
                    <td><span className="for-desktop">{tableHeads[1]}</span>{mp.sellerId}</td>
                    <td><span className="for-desktop">{tableHeads[2]}</span>{isConnected ? mp.connectionStatus : "Initial import in progress" }</td>
                    <td>
                      {isConnected ?
                        <span className="signup__table-connection"><span className="ico-checkmark"></span> Connected</span> :
                        <span className="btn btn-connect" onClick={this.connectMarketplace.bind(this, mp.marketPlaceId, mp.sellerId)}>Connect</span>
                      }
                    </td>
                  </tr>
                )
              }) }
            </tbody>
          </table>
          <div className="signup__form-cta signup__form-cta--centered">
            <span onClick={this.compleateSignup} className="btn btn-signup btn--block">Complete</span>
          </div>
          </div>
        </div>
      </div>
    )
  }
}


const mapStateToProps = (state) => ({
  signupFields: state.signup.fields,
  signupId: state.signup.signupId,
  LWA: state.lwa
});

const mapDispatchToProps = (dispatch) => ({
  setSignupFields: (data) => dispatch(setSignupFields(data)),
  setSignupStep: (data) => dispatch(setSignupStep(data)),
});

export default connect(mapStateToProps, mapDispatchToProps)(SignupStep3);
