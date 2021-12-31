import React, { Component } from 'react';
import { connect } from 'react-redux';
import { createMovie, deleteMovie } from './store';

class Movies extends Component {
  constructor(props) {
    super(props);

  }

  avgStars() {

  }

  render() {
    return (
      <div id='content'>
        <div>
          <h4>`The average rating is ${this.avgStars()}`</h4>
          <button onClick={()=>{this.props.createMovie()}}>Generate Random Movie Title</button>
        </div>
        <ul>
          {
            this.props.movies.map(movie => {
              return (
                <li key={movie.id}>
                  <button id='deleteButton' onClick={()=>{this.props.deleteMovie(movie.id)}}>x</button>
                  {`${movie.movieName}    (${movie.star})`}
                  <button id='starButton'>-</button>
                  <button id='starButton'>+</button>
                </li>
              )
            })
          }
        </ul>
      </div>
    )
  };
};

export default connect(
  ({ movies})=> {  
  // const movie = movies.find(currMovie => currMovie.id === match.params.id * 1)
    //above line turned off, using match.params.id not needed w/ spa
  return {
    movies
  }
},
(dispatch, { history })=> {
  return {
    deleteMovie: (id) => dispatch(deleteMovie(id, history)),
    createMovie: () => dispatch(createMovie(history))
  }
}
)(Movies);