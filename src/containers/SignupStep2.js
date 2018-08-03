import React, { Component } from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';

import MWSActionRegion from '../components/MWSActionRegion';
import MWSActionAuth from '../components/MWSActionAuth';
import MWSActionDomain from '../components/MWSActionDomain';

class SignupStep2 extends Component {
  static propTypes = {
    signupAuthStep: PropTypes.number
  };

  // constructor(props){
  //   super(props)
  //
  // }

  renderAction = () => {
    const action = this.props.signupAuthStep

    if ( action === 1 ){
      return ( <MWSActionRegion /> )
    } else if ( action === 2 ){
      return ( <MWSActionAuth /> )
    } else if ( action === 3 ){
      return ( <MWSActionDomain /> )
    }
  }

  render(){
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


const mapStateToProps = (state) => ({
  signupAuthStep: state.signup.signupAuthStep
});

const mapDispatchToProps = (dispatch) => ({

});

export default connect(mapStateToProps, mapDispatchToProps)(SignupStep2);
