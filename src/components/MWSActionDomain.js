import React, { Component } from 'react';
import { connect } from 'react-redux';
import CheckBox from './Forms/CheckBox';
import FormLoader from './Forms/FormLoader';
import api from '../services/Api';
import { setSignupFields, setSignupStep, setSignupAuthStep } from '../actions/signup';

class MWSActionDomain extends Component {

  constructor(props){
    super(props);

    this.state = {
      marketplaceDomains: this.props.signupFields.marketplace_domains, // state stores marketplaces ID only
      apiError: null,
      isFormSubmited: false
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
    const { signupFields } = this.props
    const seller_id = signupFields.seller_id
    const mws_auth = signupFields.mws_auth

    if ( marketplaceDomains ){

      this.setState({
        isFormSubmited: true,
        apiError: null
      })

      const marketplaceData = signupFields.authenticated_marketplace.map((x) => {
        return {
          // sellerId: seller_id, // move to 1lvl up
          marketPlaceId: x.MarketplaceId,
          name: x.Name,
          domainName: x.DomainName,
          countryCode: x.DefaultCountryCode
        }
      })

      const filteredMarketplaces = marketplaceData.filter( x =>
        marketplaceDomains.indexOf(x.marketPlaceId) !== -1)


      const obj = {
        clientId: this.props.signupId,
        sellerId: seller_id,
        authToken: mws_auth,
        marketplaces: filteredMarketplaces
      }

      console.log('POST obj', obj)
      //butch save
      api
        .post(`SaveMarketPlaceIds`, obj)
        .then((res) => {
          console.log('backend responce to POST SaveMarketPlaceIds', res)
          if ( res.data.IsSuccess ){
            this.props.setSignupFields({ // redux
              ...this.props.signupFields,
              marketplace_domains: marketplaceDomains,
              // connected_marketplaces: filteredMarketplaces
            })

            this.props.setSignupAuthStep(1); // reset ?
            this.props.setSignupStep(3);

            this.updateStepOnBackend()
              .then(res => {
                console.log(res)
              })
              .catch(err => {

              });

          } else {
            this.setState({
              apiError: res.data.ErrorMessage
            })
          }

          this.setState({
            isFormSubmited: false // reset submit status
          })

        })
        .catch(function (error) {
          console.log(error);
        });

    } // end if
  }

  async updateStepOnBackend(){
    const res = await api.post('UpdateCurrentStepAsync?step=ConnectAdvertising');
    return await res.data;
  }


  render(){
    const { marketplaceDomains, isFormSubmited, apiError } = this.state
    const { signupFields } = this.props

    const options = signupFields.authenticated_marketplace.map(x => {
      return {
        id: x.MarketplaceId,
        name: x.Name,
        text: x.DomainName
      }
    })

    return(
      <div className={"loader-container " + (isFormSubmited ? "is-loading" : null) }>
        <FormLoader />
        { apiError &&
          <span className="ui-input-validation">{apiError}</span>
        }
        <p className="t-parapgraph"><strong>Add Marketplaces to your SellerPoint account: </strong></p>
        <div className="signup__checkboxes">
          { options.map((cb, i) => {
            return(
              <CheckBox
                name={cb.name}
                text={cb.text}
                clickHandler={this.chooseOption.bind(this, cb.id)}
                isActive={marketplaceDomains.indexOf(cb.id) !== -1 }
              />
            )
          }) }
        </div>
        <div className="signup__form-cta signup__form-cta--centered">
          <span onClick={this.nextAction} className="btn btn-signup btn--block">Next</span>
        </div>
      </div>
    )
  }
}

const mapStateToProps = (state) => ({
  signupId: state.signup.signupId,
  signupFields: state.signup.fields,
  signupAuthStep: state.signup.signupAuthStep
});

const mapDispatchToProps = (dispatch) => ({
  setSignupFields: (data) => dispatch(setSignupFields(data)),
  setSignupAuthStep: (data) => dispatch(setSignupAuthStep(data)),
  setSignupStep: (data) => dispatch(setSignupStep(data))
});

export default connect(mapStateToProps, mapDispatchToProps)(MWSActionDomain);
