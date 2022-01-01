import React, { Component } from 'react';
import { connect } from 'react-redux';
import { createMovie, updateStars, deleteMovie } from './store';

class Movies extends Component {
  constructor(props) {
    super(props);
    
    
  }


  render() {
    return (
      <div id='content'>
        <div>
          <h4>{`The average rating is ${Math.round(this.props.movies.reduce((acc, movie) => {
            acc += movie.star
            return acc;
            },0) / this.props.movies.length)}!`}</h4>
          <button onClick={()=>{this.props.createMovie()}}>Generate Random Movie Title</button>
        </div>
        <ul>
          {
            this.props.movies.map(movie => {
              return (
                <li key={movie.id}>
                  <button id='deleteButton' onClick={()=>{this.props.deleteMovie(movie.id)}}>x</button>
                  {`${movie.movieName}    (${movie.star})`}
                  <button id='starButton' onClick={()=>{this.props.updateStars(movie, movie.star - 1)}}>-</button>
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
    movies,
  }
},
(dispatch, { history })=> {
  return {
    deleteMovie: (id) => dispatch(deleteMovie(id, history)),
    createMovie: () => dispatch(createMovie(history)),
    updateStars: (movie, star) => dispatch(updateStars(movie, star))
  }
}
)(Movies);