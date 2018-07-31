import React, { Component } from 'react';
import SvgIcon from '../components/SvgIcon';

export default class Footer extends Component {
  render(){
    return(
      <footer className="footer">
        <div className="container">
          <div className="footer__wrapper">
            <div className="footer__links">
              <a href="#">Terms of Use</a> | <a href="#">Privacy Policy</a>
            </div>
            <div className="footer__copy">
            © 2018 KiniMetrix SellerPoint.  All Rights Reserved.
            </div>
          </div>
        </div>
      </footer>
    )
  }
}
