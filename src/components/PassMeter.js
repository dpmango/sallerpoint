import React, { Component } from 'react';
import PropTypes from 'prop-types';

export default class PassMeter extends React.Component {
  static propTypes = {
    password: PropTypes.string,
  };

  constructor(props){
    super(props);

    this.state = {
      rules: {
        min_length: false,
        contains_upcase: false,
        contains_lowercase: false,
        contains_digits: false
      }
    }
  }

  componentDidMount(){
    this.calculate();
  }

  componentDidUpdate(prevProps){
    if (this.props.password !== prevProps.password) {
      this.calculate();
    }
  }

  // pass strength meter
  calculate = () => {
    const password = this.props.password
    const min_length = password.length >= 8
    const contains_upcase = /[A-Z]/.test(password)
    const contains_lowercase = /[a-z]/.test(password)
    const contains_digits = /\d/.test(password)

    this.setState({
      rules: {
        min_length: min_length,
        contains_upcase: contains_upcase,
        contains_lowercase: contains_lowercase,
        contains_digits: contains_digits
      }
    })
  }

  getValues = () => {
    const valiations = Object.values(this.state.rules)
    let counter = 0;
    let name = ""
    valiations.forEach( (x) => x === true ? counter++ : false )

    if ( counter === 1 ){
      name = 'Very Weak'
    } else if ( counter === 2 ){
      name = 'Weak'
    } else if ( counter === 3 ){
      name = 'Fair'
    } else if ( counter === 4 ){
      name = 'Strong'
    }

    return {
      name: name,
      count: counter
    }
  }

  render(){
    const passMeterValidations = this.getValues()
    const { rules } = this.state;
    return(
      <div className="pass-meter">
        <div className="pass-meter__line" data-counter={passMeterValidations.count}>
          <div className="pass-meter__fill">
            <div className="pass-meter__name">{passMeterValidations.name}</div>
          </div>
        </div>
        <div className="pass-meter__info">
          <span>Password Requirements:</span>
          <ul>
            <li className={rules.min_length ? "is-good": ""}>Minimum of 8 characters</li>
            <li className={rules.contains_upcase ? "is-good": ""}>Contains a capital letter</li>
            <li className={rules.contains_lowercase ? "is-good": ""}>Contains a lower case letter</li>
            <li className={rules.contains_digits ? "is-good": ""}>Contains a number</li>
          </ul>
        </div>
      </div>
    )
  }
}
