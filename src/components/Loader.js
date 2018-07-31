import React, { Component } from "react";

export default class Loader extends Component {
  descriptionBlock = () => {
    const { timedOut, error, pastDelay, retry } = this.props;

    if (error) {
      // When the loader has errored
      return (
        <div className="loader__desc">
          Something wrong. <br/> Would you like to <a onClick={ retry }>Retry</a>?
        </div>
      );
    } else if (timedOut) {
      // When the loader has taken longer than the timeout
      return (
        <div className="loader__desc">
          Loading is slower than normal... <br/> Would you like to <a onClick={ retry }>Retry</a>?
        </div>
      )
    } else if (pastDelay) {
      // When the loader has taken longer than the delay
      return null;
      // return (
      //   <div className="loader__desc">Loading...</div>
      // );
    } else {
      // When the loader has just started
      return null;
    }

  }

  render(){
    const { timedOut, error, pastDelay } = this.props;

    if ( !error && !timedOut && !pastDelay ){
      return null
    } else {
      return(
        <div className="loader">
          <div className='preloader-dots'>
            <div className='dot'></div>
            <div className='dot'></div>
            <div className='dot'></div>
            <div className='dot'></div>
          </div>
          { this.descriptionBlock() }
        </div>
      )
    }

  }
}
