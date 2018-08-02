import React, { Component } from 'react';
import { Route } from 'react-router-dom';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';

import { setHeaderClass } from '../actions/signup';

import SvgIcon from '../components/SvgIcon';
import SignupNav from '../components/SignupNav';
import SignupStep1 from '../containers/SignupStep1';
import SignupStep2 from '../containers/SignupStep2';
import SignupStep3 from '../containers/SignupStep3';

class Signup extends Component {
  static propTypes = {
    setHeaderClass: PropTypes.func.isRequired,
    signupStep: PropTypes.number
  };

  componentDidMount(){
    this.updateURL();
    this.props.setHeaderClass('header--logo-only');
  }

  componentDidUpdate(){
    this.updateURL();
  }

  updateURL = () => {
    const { signupStep, location, history } = this.props

    let newPath = process.env.PUBLIC_URL + "/signup/step-" + (signupStep);
    if ( location.pathname === newPath ){
      return
    }
    history.push(newPath)
  }


  render(){
    const { signupStep, match } = this.props

    return(
      <div className="signup">
        <div className="container">
          <SignupNav />

          <Route path={`${match.url}/:step`} component={SignupSwitch} />
          <Route
            exact
            path={match.url}
            component={SignupStep1}
          />

        </div>
      </div>
    )
  }
}


class SignupSwitch extends React.Component {

  renderStep = () => {
    const { match } = this.props;

    const stepParam = match.params.step;

    switch (stepParam) {
      case 'step-1':
        return (
          <SignupStep1 />
        )
      case 'step-2':
        return (
          <SignupStep2 />
        )
      case 'step-3':
        return (
          <SignupStep3 />
        )
      default:
        return <SignupStep1 />
    }
  }

  render() {
    return (
      <React.Fragment>
        {this.renderStep()}
      </React.Fragment>
    );
  }
}



const mapStateToProps = (state) => (
  {
    signupStep: state.signup.signupStep
  }
);

const mapDispatchToProps = (dispatch) => (
  {
    setHeaderClass: (data) => dispatch(setHeaderClass(data))
  }
);

export default connect(mapStateToProps, mapDispatchToProps)(Signup);
