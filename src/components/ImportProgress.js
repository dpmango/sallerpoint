import React, { Component } from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import api from '../services/Api';

class ImportProgress extends Component {
  static propTypes = {
    signupId: PropTypes.number
  };

  constructor(props){
    super(props);

    this.state = {
      FinanceDataImportProgress: 0,
      ReportDataImportProgress: 0,
      AdDataImportProgress: 0
    }
  }

  componentDidMount(){
    this.getImportStatus();

    // this pull data
    // let checkAPI = setInterval( () => {
    //   if ( this.state.FinanceDataImportProgress !== 100 &&
    //        this.state.ReportDataImportProgress !== 100 &&
    //        this.state.AdDataImportProgress !== 100
    //   ){
    //     this.getImportStatus();
    //   } else {
    //     clearInterval(checkAPI)
    //   }
    // }, 1000) // ajax pooling

  }

  getImportStatus = () => {

    // const { signupId } = this.props; // prodcution
    const signupId = 3212; // testing

    api
      .get(`GetDataImportStatus?clientid=${signupId}`)
      .then((res) => {
        console.log('backend responce to GET GetDataImportStatus', res)

        if ( res.data.IsSuccess ){

          this.setState({
            FinanceDataImportProgress: res.data.FinanceDataImportProgress,
            ReportDataImportProgress: res.data.ReportDataImportProgress,
            AdDataImportProgress: res.data.AdDataImportProgress
          })
        } else {

        }
      })
      .catch(function (error) {
        console.log(error);
      });
  }

  render(){

    const { FinanceDataImportProgress, ReportDataImportProgress, AdDataImportProgress } = this.state

    return(
      <div className="i-progress">
        <div className="container">
          <div className="i-progress__wrapper">
            <div className="i-progress__title">DATA IMPORT STATUS</div>
            <div className="i-progress__bars">
              <IBar name="Financials" progress={FinanceDataImportProgress} />
              <IBar name="Products" progress={ReportDataImportProgress} />
              <IBar name="Advertising" progress={AdDataImportProgress} />
            </div>
          </div>
        </div>
      </div>
    )
  }
}


const IBar = (props) => {
  const { name, progress } = props
  const isCompleated = progress === 100

  return(
    <div className="i-bar">
      <div className="i-bar__name">{name}</div>
      <div className="i-bar__status">
        <div
          className={"i-bar__progress" + (isCompleated ? " is-compleated" : "")}
          style={{"width" : `${progress}%`}}
        >
          {
            progress > 5 &&
            <span>{isCompleated ? "Complete" : progress + " %" }</span>
          }
        </div>
      </div>
    </div>
  )
}


const mapStateToProps = (state) => ({
  signupId: state.signup.signupId
});

const mapDispatchToProps = (dispatch) => ({
  // setSignupFields: (data) => dispatch(setSignupFields(data))
});

export default connect(mapStateToProps, mapDispatchToProps)(ImportProgress);
