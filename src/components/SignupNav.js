import React from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';

class SignupNav extends React.Component {
  static propTypes = {
    signupStep: PropTypes.number
  };

  render(){
    const { signupStep } = this.props

    return(
      <div className="signup-nav">
        <div className="signup-nav__wrapper">
          <SignupNavEl number={1} name="Account<br/>Registration" step={signupStep} />
          <SignupNavEl number={2} name="Connect with<br/>SellerCentral" step={signupStep} />
          <SignupNavEl number={3} name="Connect<br/>Advertising Data" step={signupStep} />
        </div>
      </div>
    )
  }
}

function SignupNavEl(props) {

  const classControl = "signup-nav__el" + (props.step === props.number ? " is-current" : "") + (props.step > props.number ? " is-done" : "")

  return (
    <div className={classControl}>
      <div className="signup-nav__number"><span>{props.number}</span></div>
      <div className="signup-nav__name" dangerouslySetInnerHTML={{__html: props.name}} />
    </div>
  )
}


const mapStateToProps = (state) => (
  {
    signupStep: state.signup.signupStep
  }
);

const mapDispatchToProps = (dispatch) => (
  {

  }
);

export default connect(mapStateToProps, mapDispatchToProps)(SignupNav);
