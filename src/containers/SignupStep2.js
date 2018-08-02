import React, { Component } from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import Formsy from 'formsy-react';
import FormInput from '../components/FormInput';
import { setSignupStep } from '../actions/signup';
import Image from '../components/Image';

class SignupStep2 extends Component {
  static propTypes = {
    setSignupStep: PropTypes.func,
  };

  constructor(props){
    super(props)

    this.state = {
      activeOption: 1,
      action: 1,
      seller_id: null,
      mws_auth: null
    }
  }

  chooseOption = (id) => {
    this.setState({
      activeOption: id
    })
  }

  nextAction = () => {
    console.log(this.state.action)
    this.setState({
      action: this.state.action + 1
    })
  }

  handleChange = (e) => {
    let fieldName = e.target.name;
    let fleldVal = e.target.value;
    this.setState({...this.state, [fieldName]: fleldVal});
  }

  formInvalid = () => {
    this.setState({ formIsValid: false });
  }

  formValid = () => {
    this.setState({ formIsValid: true });
  }


  handleSubmit = () => {
    this.nextStep();
  }

  nextStep = () => {
    this.props.setSignupStep(3);
  }

  renderAction = () => {
    const { activeOption, action, seller_id, mws_auth } = this.state
    if ( action === 1 ){
      return (
        <React.Fragment>
          <div className="signup__choose">Choose the marketplace you would like to connect:</div>
          <div className="signup__options">
            <SignupOption clickHandler={this.chooseOption} number={1} currentStep={activeOption} title="Americas (US, CA, MX, BR)" />
            <SignupOption clickHandler={this.chooseOption} number={2} currentStep={activeOption} title="Europe (not yet available)" disabled={true} />
            <SignupOption clickHandler={this.chooseOption} number={3} currentStep={activeOption} title="Asia (not yet available)" disabled={true} />
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
    } else if ( action === 2 ){
      return (
        <React.Fragment>
          <div className="signup__choose signup__choose--not-bold">Copy & paste the ‘Seller ID’ and ‘MWS Auth Token’ from Amazon into the fields below.</div>
          <Formsy
            className="signup__form"
            // onSubmit={this.submitForm}
            onValidSubmit={this.handleSubmit}
            onValid={this.formValid}
            onInvalid={this.formInvalid}
          >
            <FormInput
              name="seller_id"
              label="Seller ID"
              placeholder=""
              value={seller_id}
              validations="minLength:1"
              validationErrors={{
                isDefaultRequiredValue: 'Please enter Seller Id',
                minLength: 'ID is invalid'
              }}
              onChangeHandler={this.handleChange}
              required
            />
            <FormInput
              name="mws_auth"
              label="MWS Auth Token"
              placeholder=""
              value={mws_auth}
              validations="minLength:1"
              validationErrors={{
                isDefaultRequiredValue: 'Please enter MWS Auth Token',
                minLength: 'MWS Auth Token is invalid'
              }}
              onChangeHandler={this.handleChange}
              required
            />
          </Formsy>

          <Image image="amazonMWS.jpg" />
        </React.Fragment>
      )
    } else if ( action === 3 ){
      return (
        <React.Fragment>
        </React.Fragment>
      )
    }
  }

  render(){
    const {activeOption, action} = this.state;

    return(
      <div className="signup__container">
        <div className="signup__form">
          <h1 className="signup__heading">Connect with your SellerCentral account</h1>
          { this.renderAction() }
        </div>
      </div>
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

});

const mapDispatchToProps = (dispatch) => ({
  setSignupStep: (data) => dispatch(setSignupStep(data)),
});

export default connect(mapStateToProps, mapDispatchToProps)(SignupStep2);
