import React, { Component } from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import { setSignupStep } from '../actions/signup';

class SignupStep2 extends Component {
  static propTypes = {
    setSignupStep: PropTypes.func,
  };

  nextStep = () => {
    // this.props.setSignupStep(2);
  }

  render(){
    return(
      <div className="signup__container">
        <div className="signup__form">
          <h1>Signup step 2</h1>
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

export default connect(mapStateToProps, mapDispatchToProps)(SignupStep2);
