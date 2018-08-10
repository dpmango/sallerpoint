import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Redirect } from 'react-router-dom';
import PropTypes from 'prop-types';
import Formsy from 'formsy-react';
import api from '../services/Api';
import FormInput from '../components/Forms/FormInput';
import CheckBox from '../components/Forms/CheckBox';
import FormLoader from '../components/Forms/FormLoader';

import { setHeaderClass } from '../actions/header';
import { logIn } from '../actions/login';
import { setSignupId } from '../actions/signup';

class Login extends Component {
  static propTypes = {
    setHeaderClass: PropTypes.func.isRequired,
    logIn: PropTypes.func.isRequired
  };

  constructor(props){
    super(props);

    this.state = {
      email: "",
      password: "",
      rememberMe: false,
      formIsValid: false,
      apiError: null,
      authenticated: false,
      isFormSubmited: false
    }
  }

  formInvalid = () => {
    this.setState({ formIsValid: false });
  }

  formValid = () => {
    this.setState({ formIsValid: true });
  }

  handleChange = (e) => {
    let fieldName = e.target.name;
    let fleldVal = e.target.value;
    this.setState({...this.state, [fieldName]: fleldVal});
  }

  rememberToggler = () => {
    this.setState({
      rememberMe: !this.state.rememberMe
    })
  }

  handleSubmit = (e) => {
    if ( this.state.formIsValid){
      this.loginUser();
    }
  }

  submitForm = () => {
    // prevalidations if any ?
  }

  loginUser = () => {
    const { email, password, rememberMe } = this.state;

    this.setState({
      isFormSubmited: true // reset submit status
    })

    const loginData = {
      userEmail: email,
      password: password,
      rememberMe: rememberMe
    }

    api
      .post(`Login`, loginData)
      .then((res) => {
        console.log('backend responce to POST LOGIN', res)

        const { IsSuccess, AuthToken, UserInfo } = res.data;

        if ( IsSuccess && AuthToken ){
          this.props.logIn(AuthToken);
          this.props.setSignupId(UserInfo.ClientID)
          this.setState({
            authenticated: true
          })

          // also get the singup step and redirect if any
          if ( !UserInfo.KMASignUpCompleted ){
            // UserInfo.KMACurrentStep // gets the current step
            return
          }
        } else {
          this.setState({
            apiError: res.data.ErrorMessage
          })
        }

        this.setState({
          isFormSubmited: false // reset submit status
        })
      })
      .catch(function (error) {
        console.log(error);
      });

  }
  componentDidMount(){
    this.props.setHeaderClass('header--logo-only');
  }

  render(){

    const { email, password, rememberMe, apiError, isFormSubmited, authenticated } = this.state;

    if ( authenticated ){
      return <Redirect to={`${process.env.PUBLIC_URL}/dash`} />
    }
    return(
      <div className="signup login">
        <div className="container">
          <div className="login-container">

            <Formsy
              className="signup__form"
              onSubmit={this.submitForm}
              onValidSubmit={this.handleSubmit}
              onValid={this.formValid}
              onInvalid={this.formInvalid}
              ref={this.formRef}
            >
              <div className={"loader-container " + (isFormSubmited ? "is-loading" : "") }>
                <FormLoader />
                { apiError &&
                  <span className="ui-input-validation">{apiError}</span>
                }
                <FormInput
                  name="email"
                  label="Email Address"
                  placeholder="jennifer@saleswarehouse.com"
                  value={email}
                  validations="isEmail"
                  validationErrors={{
                    isEmail: "This is not a valid email",
                    isDefaultRequiredValue: 'Please enter email'
                  }}
                  onChangeHandler={this.handleChange}
                  required
                />
                <FormInput
                  name="password"
                  type="password"
                  label="Password"
                  placeholder=""
                  value={password}
                  onChangeHandler={this.handleChange}
                  validationErrors={{
                    isDefaultRequiredValue: 'Please enter password'
                  }}
                  required
                />
                <div className="login-remember ui-group">
                  <CheckBox
                    name="remember"
                    text="Remember me?"
                    clickHandler={this.rememberToggler}
                    isActive={rememberMe}
                  />
                </div>
                <div className="signup__form-cta">
                  <button type="submit" className="btn btn-signup btn--block">Login</button>
                </div>
              </div>
            </Formsy>
          </div>
        </div>
      </div>
    )
  }
}


const mapStateToProps = (state) => (
  {}
);

const mapDispatchToProps = (dispatch) => (
  {
    setHeaderClass: (data) => dispatch(setHeaderClass(data)),
    logIn: (data) => dispatch(logIn(data)),
    setSignupId: (data) => dispatch(setSignupId(data))
  }
);

export default connect(mapStateToProps, mapDispatchToProps)(Login);
