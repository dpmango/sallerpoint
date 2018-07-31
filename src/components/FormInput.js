import React, { Component } from 'react';
import PropTypes from 'prop-types';
import MaskedInput from 'react-text-mask'
import { withFormsy } from 'formsy-react';

class FormInput extends Component {
  static propTypes = {
    name: PropTypes.string,
    label: PropTypes.string,
    placeholder: PropTypes.string,
    value: PropTypes.string,
    onChangeHandler: PropTypes.func,
    mask: PropTypes.array
  };

  changeValue = (event) => {
    this.props.onChangeHandler(event)
    this.props.setValue(event.currentTarget.value);
  }

  render(){
    const { name, placeholder, mask, isRequired, label } = this.props

    const type = this.props.type ? this.props.type : "text"

    // An error message is returned only if the component is invalid
    const errorMessage = this.props.isFormSubmitted() ? this.props.getErrorMessage() : null;
    const parentClass = this.props.isFormSubmitted() ? this.props.isValid() ? 'ui-group' : 'ui-group has-error' : 'ui-group'

    if ( mask ){
      return (
        <div className={parentClass}>
          <MaskedInput
            type={type}
            mask={mask}
            guide={false}
            name={name}
            placeholder={placeholder}
            onChange={this.changeValue}
            value={this.props.getValue() || ''}
          />
          <span className="ui-input-validation">{errorMessage}</span>
        </div>
      )
    } else {
      return(
        <div className={parentClass + (label ? " ui-group--labeled" : "")}>
          <label htmlFor={name}>
            {isRequired ? '*' : false}
            {label}
          </label>
          <input
            type={type}
            name={name}
            placeholder={placeholder}
            onChange={this.changeValue}
            value={this.props.getValue() || ''}
            // required={isRequired ? true : false}
          />
          <span className="ui-input-validation">{errorMessage}</span>
        </div>
      )
    }

  }
}

export default withFormsy(FormInput);
