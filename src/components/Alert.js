import React, { Component } from 'react';

class Alert extends Component {
  constructor(props){
    super(props)

    let getColor
    switch (props.color) {
      case "blue":
        getColor = "#E1F1FF"
        break;
      default:
        getColor = "#E1F1FF"
    }

    this.color = getColor
  }

  render(){

    return(
      <div className="alert" style={{"backgroundColor": this.color}}>
        {this.props.content}
      </div>
    )
  }
}

export default Alert
