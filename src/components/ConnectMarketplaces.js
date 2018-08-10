import React, { Component } from 'react';
import { connect } from 'react-redux';
import api from '../services/Api'

class ConnectMarketplaces extends Component{

  constructor(props){
    super(props)

    this.state = {
      sellerMarketplaces: []
    }
  }

  componentDidMount(){
    this.getSellerMarketplaces();
  }

  getSellerMarketplaces = () => {

    const {signupId} = this.props
    // const signupId = 3212 // for testing

    api
      .get(`GetSellerMarketPlaces?ClientId=${signupId}`)
      .then((res) => {
        console.log('backend responce to GET GetSellerMarketPlaces', res)

        if ( res.data.IsSuccess ){

          // filter out unavaiable ?
          const availableMarketplaces = res.data.Marketplaces.filter( x => x.IsAdvertisingAvailable)

          this.setState({
            sellerMarketplaces: availableMarketplaces
          })
        } else {

          if ( this.props.onApiError ){
            this.props.onApiError(res.data.ErrorMessage)
          }
        }
      })
      .catch(function (error) {
        console.log(error);
      });

  }


  connectMarketplace = (marketPlaceId, sellerId) => {
    const { LWA, signupId } = this.props;
    // const options = this.state.connectedId

    if ( !LWA.resp.code ){
      this.LWAAuth();
    } else {

      this.props.onFormSubmited(true)

      const obj = {
        code: LWA.resp.code,
        scope: LWA.resp.scope,
        clientId: signupId,
        sellerId: sellerId
      }

      api
        .post(`ConnectAdvertisingData`, obj)
        .then((res) => {
          console.log('backend responce to POST ConnectAdvertisingData', res)

          if ( res.data.IsSuccess ){
            // options.push(marketPlaceId) // only push as it's imposible to deselect in design

            // this.setState({
            //   connectedId: options
            // })

            // instead of connectedID from state, just get new state from API
            this.getSellerMarketplaces()

          } else {
            // refresh token (guessed error)
            this.LWAAuth();
          }

          this.props.onFormSubmited(false) // set state in parent isFormSubmited

        })
        .catch(function (error) {
          console.log(error);
        });

    }
  }


  LWAAuth = () => {
    // "On button click redirect user to below URL where user enters his LWA credentials
    const ClientID = "amzn1.application-oa2-client.c66f0420a8fc4c13a7abb409399d9944"
    const RedirectUri = window.location.origin + "/SellerPoint/LWACallback"
    window.location.href = `https://www.amazon.com/ap/oa?client_id=${ClientID}&scope=cpc_advertising:campaign_management&response_type=code&redirect_uri=${RedirectUri}`

  }

  render(){
    const tableHeads = [
      "Marketplace Name",
      "Seller ID",
      "MWS Status (SellerPoint)",
      "Advertising Data Status"
    ]

    const { sellerMarketplaces } = this.state;

    return(
      <table className="signup__table">
        <thead>
          <tr>
            { tableHeads.map( (name,index) => {
              return ( <td key={index}>{name}</td> )
            }) }
          </tr>
        </thead>
        { sellerMarketplaces &&
          <tbody>
            { sellerMarketplaces.map( (mp, index) => {
              const isConnected = mp.IsAdvertisingConnected
              return (
                <tr key={index}>
                  <td><span className="for-desktop">{tableHeads[0]}</span>{mp.Name}</td>
                  <td><span className="for-desktop">{tableHeads[1]}</span>{mp.SellerId}</td>
                  <td><span className="for-desktop">{tableHeads[2]}</span>{mp.MWSStatus}</td>
                  <td>
                    {isConnected ?
                      <span className="signup__table-connection"><span className="ico-checkmark"></span> Connected</span> :
                      <span className="btn btn-connect" onClick={this.connectMarketplace.bind(this, mp.MarketPlaceId, mp.SellerId)}>Connect</span>
                    }
                  </td>
                </tr>
              )
            }) }
          </tbody>
        }
      </table>
    )
  }
}


const mapStateToProps = (state) => ({
  signupId: state.signup.signupId
});

const mapDispatchToProps = (dispatch) => ({
  // setSignupFields: (data) => dispatch(setSignupFields(data))
});

export default connect(mapStateToProps, mapDispatchToProps)(ConnectMarketplaces);
