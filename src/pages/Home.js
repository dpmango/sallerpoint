import React, { Component } from 'react';
import { Link } from 'react-router-dom';

export default class Home extends Component {
  render(){
    return(
      <div className="home">
        <div className="container">
          <h1>Home page</h1>
          <Link to={`${process.env.PUBLIC_URL}/login`} className="btn btn-primary">Login page</Link>
          <Link to={`${process.env.PUBLIC_URL}/signup`} className="btn btn-primary">Signup page</Link>
          <Link to={`${process.env.PUBLIC_URL}/dash`} className="btn btn-primary">Dashboard page</Link>
        </div>
      </div>
    )
  }
}
