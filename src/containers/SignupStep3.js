import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Redirect } from 'react-router-dom';
import PropTypes from 'prop-types';
import { setSignupStep, setSignupFields } from '../actions/signup';
// import SvgIcon from '../components/SvgIcon';
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
      shouldRedirect: false
    }
  }

  connectMarketplace = (id) => {
    const options = this.state.connectedId

    options.push(id) // only push as it's imposible to deselect in design

    this.LWAAuth();
    this.setState({
      connectedId: options
    })

    // this.props.setSignupFields({
    //   ...this.props.signupFields,
    //   connected_marketplaces: [
    //     ..this.props.signupFields.filteredMarketplaces,
    //   ]
    // })
  }

  LWAAuth = () => {
    // "On button click redirect user to below URL where user enters his LWA credentials
    // https://www.amazon.com/ap/oa?client_id={ClientID}&amp;scope=cpc_advertising:campaign_management&amp;response_type=code&amp;redirect_uri={RedirectUri}
    //
    // ClientId: amzn1.application-oa2-client.c66f0420a8fc4c13a7abb409399d9944
    // RedirectUri : URL of step 3 or server side action that reads the advertising info and stores into DB"

    const ClientID = "amzn1.application-oa2-client.c66f0420a8fc4c13a7abb409399d9944"
    const RedirectUri = window.location.host + "/LWACallback"
    window.open(`https://www.amazon.com/ap/oa?client_id=${ClientID}&scope=cpc_advertising:campaign_management&response_type=code&redirect_uri=${RedirectUri}`)

  }

  compleateSignup = () => {
    // this.props.setSignupStep(1);

    this.setState({
      shouldRedirect: true
    })
  }

  render(){
    const { connectedId, shouldRedirect } = this.state;
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
                        <span className="btn btn-connect" onClick={this.connectMarketplace.bind(this, mp.marketPlaceId)}>Connect</span>
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
    )
  }
}


const mapStateToProps = (state) => ({
  signupFields: state.signup.fields,
});

const mapDispatchToProps = (dispatch) => ({
  setSignupFields: (data) => dispatch(setSignupFields(data)),
  setSignupStep: (data) => dispatch(setSignupStep(data)),
});

export default connect(mapStateToProps, mapDispatchToProps)(SignupStep3);
