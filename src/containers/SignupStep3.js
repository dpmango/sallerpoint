import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Redirect } from 'react-router-dom';
import PropTypes from 'prop-types';
import { setSignupStep } from '../actions/signup';
// import SvgIcon from '../components/SvgIcon';
import FormLoader from '../components/Forms/FormLoader';
import ConnectMarketplaces from '../components/ConnectMarketplaces';
import api from '../services/Api'


class SignupStep3 extends Component {

  isAdvertisingOptedOut=false;

  static propTypes = {
    setSignupStep: PropTypes.func,
    // setSignupFields: PropTypes.func
  };

  constructor(props){
    super(props)

    this.state = {
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

  advertisingOptedOutChange(checked){   
this.isAdvertisingOptedOut=checked.target.checked;
  }

  async compleateSignupOnBackend(){

    if (this.isAdvertisingOptedOut){    
      await api.post('AdvertisingOptOut', {sellerId : this.props.SellerId});
    }
   const res = await api.post('SignUpComplete');
    return await res.data;
  }

  render(){
    const { shouldRedirect, isFormSubmited, apiError } = this.state;
    // const { signupFields } = this.props;

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
               <input type="checkbox"onChange= {(e, checked) => this.advertisingOptedOutChange(e)}/> I don`t have advertising data to connect
              </div>

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
  signupId: state.signup.signupId,
  LWA: state.lwa,
  SellerId: state.seller_Id
});

const mapDispatchToProps = (dispatch) => ({
  setSignupStep: (data) => dispatch(setSignupStep(data)),
});

export default connect(mapStateToProps, mapDispatchToProps)(SignupStep3);
