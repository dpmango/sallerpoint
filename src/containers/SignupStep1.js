import React, { Component } from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import Formsy from 'formsy-react';

import { setSignupStep } from '../actions/signup';

import FormInput from '../components/FormInput';

class SignupStep1 extends Component {
  static propTypes = {
    setSignupStep: PropTypes.func,
  };

  constructor(props) {
    super(props);

    this.state = {
      first_name: props.signupFields.first_name,
      last_name:  props.signupFields.last_name,
      company_name:  props.signupFields.company_name,
      email: props.signupEmail,
      phone: props.signupFields.phone,
      password: props.signupFields.password,
      password_confirmation: '',
      captcha: null,
      formIsValid: false,
      isTransitioningNext: false
    };

    this.formRef = React.createRef();
  }


  formInvalid = () => {
    this.setState({ formIsValid: false });
  }

  formValid = () => {
    this.setState({ formIsValid: true });
  }

  // submit handler from the form
  handleSubmit = (e) => {
    if ( this.state.formIsValid ){
      this.nextStep();
    }
  }

  // click handler for the button
  submitForm = () => {
    this.formRef.current.submit();
  }

  handleChange = (e) => {
    let fieldName = e.target.name;
    let fleldVal = e.target.value;
    this.setState({...this.state, [fieldName]: fleldVal})
  }

  nextStep = () => {
    const { first_name, last_name, company_name, email, phone } = this.state;
    this.props.setSignupStep(2);
  }


  render(){
    const { first_name, last_name, company_name, email, phone, password, isTransitioningNext } = this.state;

    return(
      <div className="signup__container">
        <Formsy
          className="signup__form"
          onValidSubmit={this.handleSubmit}
          onValid={this.formValid}
          onInvalid={this.formInvalid}
          ref={this.formRef}
        >
          <FormInput
            name="first_name"
            label="First Name"
            placeholder="Jennifer"
            value={first_name}
            validations="minLength:1"
            validationErrors={{
              isDefaultRequiredValue: 'Please fill your first name',
              minLength: 'Name is too short'
            }}
            onChangeHandler={this.handleChange}
            required
          />
          <FormInput
            name="last_name"
            label="Last Name"
            placeholder="Smith"
            value={last_name}
            validations="minLength:1"
            validationErrors={{
              isDefaultRequiredValue: 'Please fill your last name',
              minLength: 'Last name is too short'
            }}
            onChangeHandler={this.handleChange}
            required
          />
          <FormInput
              name="company_name"
              label="Company Name"
              placeholder="Sales Warehouse LLC"
              value={company_name}
              onChangeHandler={this.handleChange}
              validationErrors={{
                isDefaultRequiredValue: 'Please fill company name'
              }}
              required
            />
          <FormInput
            name="email"
            label="Email Address"
            placeholder="jennifer@saleswarehouse.com"
            value={email}
            validations="isEmail"
            validationErrors={{
              isEmail: "This is not a valid email",
              isDefaultRequiredValue: 'Please fill email'
            }}
            onChangeHandler={this.handleChange}
            required
          />
          <FormInput
            name="phone"
            label="Phone"
            placeholder="Phone"
            value={phone}
            onChangeHandler={this.handleChange}
            validationErrors={{
              isDefaultRequiredValue: 'Please fill phone'
            }}
            required
          />
          { /* <FormInput
            name="phone"
            type="tel"
            placeholder="Phone Number"
            value={phone}
            mask={['+','6','5', ' ', /\d/, /\d/, /\d/, /\d/, ' ', /\d/, /\d/, /\d/, /\d/]}
            onChangeHandler={this.handleChange}
            validations={{
              matchRegexp: /\+65 \d{4} \d{4}/
            }}
            validationErrors={{
              matchRegexp: "Phone number is not valid",
              isDefaultRequiredValue: 'Please fill phone'
            }}
            required
          /> */}
          <FormInput
            name="password"
            label="Password"
            placeholder="Password"
            value={password}
            onChangeHandler={this.handleChange}
            validationErrors={{
              isDefaultRequiredValue: 'Please fill password'
            }}
            required
          />
          <div className="captcha">Captcha</div>
          <div className="signup__form-cta">
            <button onclick={this.submitForm} className="btn btn-signup btn--block">Sign Up</button>
          </div>
        </Formsy>
      </div>
    )
  }
}


const mapStateToProps = (state) => ({
  signupFields: state.signup.fields,
});

const mapDispatchToProps = (dispatch) => ({
  setSignupStep: (data) => dispatch(setSignupStep(data)),
});

export default connect(mapStateToProps, mapDispatchToProps)(SignupStep1);
