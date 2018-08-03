import React, { Component } from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import { setSignupStep } from '../actions/signup';

class SignupStep3 extends Component {
  static propTypes = {
    setSignupStep: PropTypes.func,
  };

  compleateSignup = () => {
    this.props.setSignupStep(1);
  }

  render(){
    return(
      <div className="signup__container signup__container--wide">
        <div className="signup__form">
          <div className="signup__heading">Set up your advertising data by connecting your Sponsored Products so we can help you manage the effectiveness of your campaigns</div>

          <div className="signup__form-cta signup__form-cta--centered">
            <span onClick={this.compleateSignup} className="btn btn-signup btn--block">Complete</span>
          </div>
        </div>
      </div>
    )
  }
}


const mapStateToProps = (state) => ({

});

const mapDispatchToProps = (dispatch) => ({
  setSignupStep: (data) => dispatch(setSignupStep(data)),
});

export default connect(mapStateToProps, mapDispatchToProps)(SignupStep3);
