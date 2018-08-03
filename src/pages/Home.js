import React, { Component } from 'react';
import { Link } from 'react-router-dom';

export default class Home extends Component {
  render(){
    return(
      <div className="home">
        <div className="container">
          <h1>Home page (place static landing code here)</h1>
          <Link to={`${process.env.PUBLIC_URL}/login`} className="btn btn-signup">Login page</Link>
          <br/><br/>
          <Link to={`${process.env.PUBLIC_URL}/signup`} className="btn btn-signup">Signup page</Link>
          <br/><br/>
          <Link to={`${process.env.PUBLIC_URL}/dash`} className="btn btn-signup">Dashboard page</Link>
        </div>
      </div>
    )
  }
}
