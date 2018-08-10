import React, { Component } from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import api from '../services/Api';
import { setHeaderClass } from '../actions/header';
import store from '../store/store';

import ImportProgress from '../components/ImportProgress';


class ConfigurationCOGS extends Component {

    static propTypes = {
        setHeaderClass: PropTypes.func.isRequired
      };

      constructor(){
          super();
          this.getAllCOGS();
      }

      
  componentDidMount(){
    this.props.setHeaderClass('header--dash');
  }

  getAllCOGS = () => {  

    console.log(store.getState().login);
    api
      .get(`GetAllCOGS`)
      .then((res) => {
        console.log('backend responce to GET GetAllCOGS', res)
        // "{
        //   ""AuthToken"": ""bk5KY1YyQllmZHZJMm85THBiQmcxQm4zM3A4VElMRmNkSjdISFN0dG9Qbz06cG11bmRvbGltb29sZUB0aGVraW5pZ3JvdXAuY29tOjYzNjY4ODk4MTg2OTA5MDc4Nw=="",
        //   ""IsSuccess"": true,
        //   ""ErrorMessage"": ""An error has occurred.""
        // }"

        if ( res.data.IsSuccess && res.data.AuthToken ){
        
        } else {
          this.setState({
            apiError: res.data.ErrorMessage
          })
        }        
      })
      .catch(function (error) {
        console.log(error);
      });

  }

    render(){
        return (
          <React.Fragment>
            <ImportProgress />
            <div className="dash">
              <div className="container container--narrow">
                <div className="dash__heading">
                  <h1 className="dash__title">COGS page</h1>
                </div>
              </div>
            </div>
          </React.Fragment>
        )
      }}


const mapStateToProps = (state) => (
    {
    }
  );
  
  const mapDispatchToProps = (dispatch) => (
    {
      setHeaderClass: (data) => dispatch(setHeaderClass(data))
    }
  );
  
  export default connect(mapStateToProps, mapDispatchToProps)(ConfigurationCOGS)