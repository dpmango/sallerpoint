import React, { Component } from 'react';
import { connect } from 'react-redux'
import PropTypes from 'prop-types';
// import QdtComponents from 'qdt-components';
// import QlikConnector from './QlikConnector';

class QdtComponent extends Component {
  static propTypes = {
    type: PropTypes.string.isRequired,
    props: PropTypes.object.isRequired,
  }

  constructor(props){
    super(props);

    this.state = {
      isConnected: false
    }

    // this.qdtComponents = // import here
  }

  componentDidMount(){
    this.renderQdt();
  }

  componentDidUpdate(){
    this.renderQdt();
  }


  renderQdt = () => {

    const { type, props } = this.props;
    const { QlikConnected } = this.props

    if ( QlikConnected && window.GlobalQdtComponents ){
      // console.log(this.props.QlikInstance)
      // console.log('GlobalQdtComponents in QdtComponenet', window.GlobalQdtComponents)
      window.GlobalQdtComponents.render(type, props, this.node);
    }
  }

  render() {

    // const { isConnected } = this.state;
    const { QlikConnected } = this.props
    return (
      <React.Fragment>
        { /* <QlikConnector /> */}
        { QlikConnected &&
          <div ref={(node) => { this.node = node; }} />
        }
      </React.Fragment>
    );
  }
}


const mapStateToProps = (state) => ({
  QlikConnected: state.qlik.connected,
  QlickParams: state.qlik.params,
  QlikInstance: state.qlik.instance
});

const mapDispatchToProps = (dispatch) => ({

});

// export { GlobalQdtComponents }

export default connect(mapStateToProps, mapDispatchToProps)(QdtComponent);
