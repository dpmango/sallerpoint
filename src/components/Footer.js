import React, { Component } from 'react';

export default class Footer extends Component {
  render(){
    return(
      <footer className="footer">
        <div className="container">
          <div className="footer__wrapper">
            <div className="footer__links">
              <a href="http://qa.kinimetrix.com:8082/terms" target="_blank" rel="noopener noreferrer">Terms of Use</a> | <a href="http://qa.kinimetrix.com:8082/privacy" target="_blank" rel="noopener noreferrer">Privacy Policy</a>
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
