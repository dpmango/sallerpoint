import React from 'react';
import { Switch, Route, withRouter } from 'react-router-dom';
import { routes } from './routes';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import ScrollTo from './services/ScrollTo';

class RenderSwitch extends React.Component {
  static propTypes = {

  };

  componentDidUpdate(prevProps) {
    const curPathSplit = this.props.location.pathname.split('/');
    const prevPathSplit = prevProps.location.pathname.split('/');

    // transition when switching between the routes
    if (this.props.location.pathname !== prevProps.location.pathname) {
      ScrollTo(0, 300);
    }
  }

  render(){
    const PropsRoute = ({ component: Component, ...rest }) => (
      <Route {...rest} render={props => (
        <Component {...props}/>
        // pass props to component
      )}/>
    )

    return(
      <Switch>
        {routes.map(route => (
          <PropsRoute
            key={route.path}
            exact={route.isExact}
            path={route.path}
            component={route.component}
          />
        ))}
      </Switch>
    )
  }
}
const mapStateToProps = (state) => ({

});

const mapDispatchToProps = (dispatch) => ({

});

export default withRouter(
  connect(mapStateToProps, mapDispatchToProps)(RenderSwitch)
);
