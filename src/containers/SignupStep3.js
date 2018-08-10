import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Redirect } from 'react-router-dom';
import PropTypes from 'prop-types';
import { setSignupStep, setSignupFields } from '../actions/signup';
// import SvgIcon from '../components/SvgIcon';
import FormLoader from '../components/FormLoader';
import ConnectMarketplaces from '../components/ConnectMarketplaces';
import api from '../services/Api'


class SignupStep3 extends Component {
  static propTypes = {
    setSignupStep: PropTypes.func,
    setSignupFields: PropTypes.func
  };

  constructor(props){
    super(props)

    this.state = {
      // connectedId: [],
      shouldRedirect: false,
      isFormSubmited: false,
      apiError: null
    }
  }

  setApiError = (error) => {
    this.setState(error)
  }

  onFormSubmited = (state) => {
    this.setState({
      isFormSubmited: state
    })
  }

  compleateSignup = () => {
    // this.props.setSignupStep(1);

    this.setState({
      shouldRedirect: true
    })

    this.compleateSignupOnBackend()
      .then(res => {
        console.log(res)
      })
      .catch(err => {

      });

  }

  async compleateSignupOnBackend(){
    const res = await api.post('SignUpComplete');
    return await res.data;
  }

  render(){
    const { connectedId, shouldRedirect, isFormSubmited, apiError } = this.state;
    const { signupFields } = this.props;

    if ( shouldRedirect ){
      return <Redirect to={`${process.env.PUBLIC_URL}/dash`} />
    }

    return(
      <div className="signup__container signup__container--wide">
        <div className={"loader-container " + (isFormSubmited ? "is-loading" : null) }>
          <FormLoader />
          { apiError &&
            <span className="ui-input-validation">{apiError}</span>
          }
            <div className="signup__form">
              <div className="signup__heading">Set up your advertising data by connecting your Sponsored Products so we can help you manage the effectiveness of your campaigns</div>
              <ConnectMarketplaces
                onApiError={this.setApiError}
                onFormSubmited={this.onFormSubmited}
              />
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
