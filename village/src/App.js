import React, { Component } from 'react';
import './App.css';
import SmurfForm from './components/SmurfForm';
import Smurfs from './components/Smurfs';
import axios from 'axios';
import { Route } from 'react-router-dom';
import { NavLink } from 'react-router-dom';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      smurfs: [],
    };
  }
  // add any needed code to ensure that the smurfs collection exists on state and it has data coming from the server
  // Notice what your map function is looping over and returning inside of Smurfs.
  // You'll need to make sure you have the right properties on state and pass them down to props.

  componentDidMount() {
    axios.get('http://localhost:3333/smurfs')
    .then(res => this.setState({ smurfs: res.data }))
  }

  addSmurf = (e, smurf) => {
    e.preventDefault();
    axios.post('http://localhost:3333/smurfs', smurf)
    .then(res => {
      this.setState({ smurfs: res.data })
      this.props.history.push('/');
    })
  }

  

  render() {
    return (
      <div className="App">
        <div id="clouds"></div>
        <div id="ground"></div>
        <nav>
          <NavLink exact to={`/`} className="active-nav">
            <p>Home</p>
          </NavLink>
          <NavLink to={`/smurf-form`} className="active-nav">
            <p>Add Smurf</p>
          </NavLink>
        </nav>
        <div className="second-border"></div>
        <Route path="/" exact render={ownProps => <Smurfs {...ownProps} smurfs={this.state.smurfs} />} />
        <Route path="/smurf-form" render={ownProps => <SmurfForm {...ownProps} addSmurf={this.addSmurf} />} />
      </div>
    );
  }
}

export default App;
