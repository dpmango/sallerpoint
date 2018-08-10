import React, { Component } from 'react';
import { Route } from 'react-router-dom';

import ConfigurationCOGS from '../containers/ConfigurationCOGS';

class Configuration extends Component {
    render(){
        const { match } = this.props
    
        return(
          <React.Fragment>
            <Route path={`${match.url}/:action`} component={ConfigurationSwitch} />
            <Route
              exact
              path={match.url}
              component={ConfigurationCOGS}
            />
          </React.Fragment>
        )
      }
}



class ConfigurationSwitch extends React.Component {

    renderAction = () => {
      const { match } = this.props;
  
      const actionParam = match.params.action;
  
      switch (actionParam) {
        case 'cogs':
          return (
            <ConfigurationCOGS />
          )       
        default:
          return <ConfigurationCOGS />
      }
    }
  
    render() {
      return (
        <React.Fragment>
          {this.renderAction()}
        </React.Fragment>
      );
    }
  }
  
  export default Configuration