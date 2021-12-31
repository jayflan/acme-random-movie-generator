import React, {Component} from 'react';
import { HashRouter as Router, Route, Switch, Link } from 'react-router-dom';
import { connect } from 'react-redux';
import { fetchMovies } from './store';
import Movies from './Movies';

class App extends Component {
  componentDidMount(){
    this.props.load();
  }; 

  render() {
    return (
      <Router>
        <div id='main'>
          <Route exact path='/' component={Movies} />
        </div>
      </Router>
    )
  }
};

export default connect(
  ({ movies })=> {
    return {
      movies
    };
  },
  (dispatch)=> {
    return {
      load: ()=> dispatch(fetchMovies())
    }
  }
)(App);