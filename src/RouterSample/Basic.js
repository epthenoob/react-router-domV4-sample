import React, { Component } from 'react';

import {
  BrowserRouter as Router,
  Route,
  Link
} from 'react-router-dom';

const Home = () => (
  <div>
    <h2>Ini Halaman Basic Home</h2>
  </div>
)

const About = () => (
  <div>
    <h2>Ini Halaman About</h2>
  </div>
)

const Topics = ({ match }) => (
  <div>
    <h2>Topics</h2>
    <ul>
      <li>
        <Link to={`${match.url}/rendering`}>
          Rendering with React
        </Link>
      </li>
      <li>
        <Link to={`${match.url}/components`}>
          Components
        </Link>
      </li>
      <li>
        <Link to={`${match.url}/props-v-state`}>
          Props v. State
        </Link>
      </li>
    </ul>

    <Route path={`${match.url}/:topicId`} component={Topic}/>
    <Route exact path={match.url} render={() => (
      <h3>Please select a topic.</h3>
    )}/>
  </div>
)

const Topic = ({ match }) => (
  <div>
    <h3>{match.params.topicId}</h3>
  </div>
)

const Child = ({ match }) =>(
  <div>
    <h3>ID: {match.params.id}</h3>
  </div>
)

var divStyle = {
  marginLeft: '50px',
};

const BasicExample = () => (

  <Router>
    <div style={divStyle} >
      <hr />
      <h2>Basic</h2>
      <ul>
        <li><Link to="/basic">Home</Link></li>
        <li><Link to="/basic/about">About</Link></li>
        <li><Link to="/basic/topics">Topics</Link></li>
      </ul>

      <Route exact path="/basic" component={Home} />
      <Route path="/basic/about" component={About} />
      <Route path="/basic/topics" component={Topics} />

      <br /><hr />

      <h2>URL Parameter</h2>
      <ul>
        <li><Link to="/basic/netflix">Netflix</Link></li>
        <li><Link to="/basic/zillow-group">Zillow Group</Link></li>
        <li><Link to="/basic/yahoo">Yahoo</Link></li>
        <li><Link to="/basic/modus-create">Modus Create</Link></li>
      </ul>

      <Route path="/:id" component={Child} />

      <br /><hr />

    </div>
  </Router>
)


export default BasicExample;

