import React, { Component } from 'react';
import { BrowserRouter } from 'react-router-dom';
import { routes } from './routes';
import svg4everybody from 'svg4everybody';

import RenderSwitch from './Switch';
import Header from './components/Header';
import Footer from './components/Footer';

class App extends Component {

  componentDidMount(){
    require('viewport-units-buggyfill').init({
      force: false,
      refreshDebounceWait: 150
    });

    svg4everybody();
  }

  render() {
    return (
      <BrowserRouter basename={'/SellerPoint'}>
        <div className="page">
          <Header routes={routes.filter(route => route.forNavBar)}/>
            <div className="page__content">
              <RenderSwitch />
            </div>
          <Footer />
        </div>
      </BrowserRouter>
    );
  }
}

export default App;
