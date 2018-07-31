import React from 'react';
import { Link } from 'react-router-dom';
class SignupNav extends React.Component {

  constructor(props){
    super(props);
  }

  render(){
    return(
      <div className="signup-nav">
        <div className="signup-nav__wrapper">
          <div className="signup-nav__el is-active">
            <div className="signup-nav__number"><span>1</span></div>
            <div className="signup-nav__name">Account<br/>Registration</div>
          </div>
          <div className="signup-nav__el">
            <div className="signup-nav__number"><span>2</span></div>
            <div className="signup-nav__name">Connect with<br/>SellerCentral</div>
          </div>
          <div className="signup-nav__el">
            <div className="signup-nav__number"><span>3</span></div>
            <div className="signup-nav__name">Connect<br/>Advertising Data</div>
          </div>
        </div>
      </div>
    )
  }
}

export default SignupNav
