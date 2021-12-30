import React, {Component} from 'react';
import { HashRouter as Router, Route, Switch, Link } from 'react-router-dom';
import { connect } from 'react-redux';
import { fetchMovies } from './store';


class App extends Component {
  componentDidMount(){
    this.props.load();
  }; 


  render() {
    console.log(this.props)
    return (
      // <Router>
        <div id='main'>
          <h1>Test</h1>
        </div>
      // </Router>
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