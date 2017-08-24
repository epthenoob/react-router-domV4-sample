import React, { Component } from 'react';

import BasicExample from './RouterSample/Basic.js';

import {
  BrowserRouter as Router,
  Route,
  Link
} from 'react-router-dom';


var divStyle = {
  marginLeft: '50px',
};


const Menu = () => (
  <ul>
    <li><Link to="/">Home</Link></li>
    <li><Link to="/Basic">Basic sample</Link></li>
  </ul>
)


class App extends Component {
  render() {
    return (
      <Router>
        <div style={divStyle} >
          <h1>Menu Home</h1>
          <Route path="/" component={Menu} />
          <Route path="/Basic" component={BasicExample} />
        </div>  
      </Router>
    );
  }
}

export default App;