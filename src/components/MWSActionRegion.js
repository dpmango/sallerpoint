import React, { Component } from 'react';
import { connect } from 'react-redux';
import Formsy from 'formsy-react';
import FormInput from '../components/FormInput';
import Image from './Image';
import FormLoader from './FormLoader';
import api from '../services/Api';
import { setSignupFields, setSignupAuthStep } from '../actions/signup';


class MWSActionRegion extends Component {

  constructor(props){
    super(props);

    this.state = {
      marketplaceRegion: props.signupFields.marketplace_region
    }
  }

  chooseOption = (id) => {
    this.props.setSignupFields({ // redux
      ...this.props.signupFields,
      marketplace_region: id
    })
  }

  nextAction = () => {
    this.props.setSignupAuthStep(
      this.props.signupAuthStep + 1
    )
  }

  render(){

    const { marketplaceRegion } = this.state

    return(
      <React.Fragment>
        <div className="signup__choose">Choose the marketplace you would like to connect:</div>
        <div className="signup__options">
          <SignupOption clickHandler={this.chooseOption} number={1} currentStep={marketplaceRegion} title="Americas (US, CA, MX, BR)" />
          <SignupOption clickHandler={this.chooseOption} number={2} currentStep={marketplaceRegion} title="Europe (not yet available)" disabled={true} />
          <SignupOption clickHandler={this.chooseOption} number={3} currentStep={marketplaceRegion} title="Asia (not yet available)" disabled={true} />
        </div>

        <div className="signup__note">
          <strong>From here, you will be redirected to Amazon to grant permission for KiniMetrix.</strong>
          <br /><br />
          1. Make sure that you sign into your SellerCentral account
          <br /><br />
          2. The Amazon Marketplace Webservice will autopopulate KiniMetrix’s information
          <br /><br />
          3. Grant permission to KiniMetrix by confirming
          <br /><br />
          <span className="t-up">4. Once the connection is made, you will come back and input the    ‘Seller  ID’ and the ‘MWS Auth Token’</span>
        </div>
        <div className="signup__form-cta signup__form-cta--centered">
          <span onClick={this.nextAction} className="btn btn-signup btn--block">Connect Marketplace</span>
        </div>
      </React.Fragment>
    )
  }
}

const SignupOption = (props) => {
  const { number, currentStep, title, clickHandler, disabled } = props
  return (
    <div
      className={"signup-option" + (currentStep === number ? " is-active" : "")}
      onClick={() => clickHandler(number)}
      data-disabled={disabled ? true : false}
    >{title}</div>
  )
}


const mapStateToProps = (state) => ({
  signupFields: state.signup.fields,
  signupAuthStep: state.signup.signupAuthStep
});

const mapDispatchToProps = (dispatch) => ({
  setSignupFields: (data) => dispatch(setSignupFields(data)),
  setSignupAuthStep: (data) => dispatch(setSignupAuthStep(data))
});

export default connect(mapStateToProps, mapDispatchToProps)(MWSActionRegion);
