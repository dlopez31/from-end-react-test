//Dependencies
import React, { Component } from 'react';
import PropTypes from 'prop-types';

// components
import Header from './global/Header';
import Contents from './global/Contents';
import Footer from './global/Footer';

//Data
import items from '../data/menu';

class App extends Component {
  static propTypes ={
    children : PropTypes.object
  }
  render() {
    const { children } = this.props;
    return (
      <div className="App">
        <Header title="Digital Cryptocurrency Dashboard" items={items} />
        <Contents body={ children }/>
        <Footer copyright="&copy; Test React 2018"  />
      </div>
    );
  }
}

export default App;
