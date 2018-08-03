import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Redirect } from 'react-router-dom';
import PropTypes from 'prop-types';
import { setSignupStep, setSignupFields } from '../actions/signup';
// import SvgIcon from '../components/SvgIcon';

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

    setTimeout( () => { // emulate api
      this.setState({
        connectedId: options
      })
    }, 300)

    // this.props.setSignupFields({
    //   ...this.props.signupFields,
    //   connected_marketplaces: [
    //     ..this.props.signupFields.filteredMarketplaces,
    //   ]
    // })
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
