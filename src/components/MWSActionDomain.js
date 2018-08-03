import React, { Component } from 'react';
import { connect } from 'react-redux';
import Formsy from 'formsy-react';
import FormInput from '../components/FormInput';
import Image from './Image';
import CheckBox from './CheckBox';
import FormLoader from './FormLoader';
import api from '../services/Api';
import { setSignupFields, setSignupStep } from '../actions/signup';

class MWSActionDomain extends Component {

  constructor(props){
    super(props);

    this.state = {
      marketplaceDomains: this.props.signupFields.marketplace_domains
    }
  }

  chooseOption = (id) => {
    const options = this.state.marketplaceDomains
    let index

    if (options.indexOf(id) === -1) {
     options.push(id)
    } else {
     index = options.indexOf(id)
     options.splice(index, 1)
    }

    this.setState({
      marketplaceDomains: options
    })
  }

  nextAction = () => {
    const { marketplaceDomains } = this.state

    if ( marketplaceDomains ){
      this.props.setSignupFields({ // redux
        ...this.props.signupFields,
        marketplace_domains: marketplaceDomains
      })
      this.props.setSignupStep(3);
    }
  }

  render(){
    const { marketplaceDomains } = this.state

    const options = [
      {
        name: "com.mx",
        text: "www.amazon.com.mx"
      },
      {
        name: "com.ca",
        text: "www.amazon.com.ca"
      },
      {
        name: "com",
        text: "www.amazon.com"
      }
    ]

    return(
      <React.Fragment>
        <p className="t-parapgraph"><strong>Add Marketplaces to your SellerPoint account: </strong></p>
        <div className="signup__checkboxes">
          { options.map((cb, i) => {
            return(
              <CheckBox
                name={cb.name}
                text={cb.text}
                clickHandler={this.chooseOption.bind(this, (i + 1))}
                isActive={marketplaceDomains.indexOf(i+1) !== -1}
              />
            )
          }) }
        </div>
        <div className="signup__form-cta signup__form-cta--centered">
          <span onClick={this.nextAction} className="btn btn-signup btn--block">Next</span>
        </div>
      </React.Fragment>
    )
  }
}

const mapStateToProps = (state) => ({
  signupFields: state.signup.fields,
  signupAuthStep: state.signup.signupAuthStep
});

const mapDispatchToProps = (dispatch) => ({
  setSignupFields: (data) => dispatch(setSignupFields(data)),
  setSignupStep: (data) => dispatch(setSignupStep(data))
});

export default connect(mapStateToProps, mapDispatchToProps)(MWSActionDomain);
