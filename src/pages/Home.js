import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import SvgIcon from '../components/SvgIcon';

export default class Home extends Component {
  render(){
    return(
      <div className="home">
        <div className="container">
          <h1>Home page</h1>
          <Link to="/login" className="btn btn-primary">Login page</Link>
          <Link to="/signup" className="btn btn-primary">Signup page</Link>
          <Link to="/dash" className="btn btn-primary">Dashboard page</Link>
        </div>
      </div>
    )
  }
}
