import React, { Component } from 'react';
import ConnectMarketplaces from '../ConnectMarketplaces';

export default class DashMarketplaceConfig extends Component {
  constructor(props){
    super(props)

    this.state = {
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

  render(){

    return(
      <React.Fragment>
        <div className="dash-container">
          <div className="container container--full">
            <ConnectMarketplaces
              onApiError={this.setApiError}
              onFormSubmited={this.onFormSubmited}
            />
          </div>
        </div>
      </React.Fragment>
    )
  }
}
