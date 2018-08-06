import React, { Component } from 'react';

class ImportProgress extends Component {
  render(){
    return(
      <div className="i-progress">
        <div className="container">
          <div className="i-progress__wrapper">
            <div className="i-progress__title">DATA IMPORT STATUS</div>
            <div className="i-progress__bars">
              <IBar name="Financials" progress={37} />
              <IBar name="Products" progress={100} />
              <IBar name="Advertising" progress={85} />
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

export default ImportProgress
