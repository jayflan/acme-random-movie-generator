import React, { Component } from 'react';
import { connect } from 'react-redux';
import { fetchMovies, createMovie, subtractStars, addStars, deleteMovie } from './store';

class Movies extends Component {
  constructor(props) {
    super(props);
  }


  render() {
    const { movies, createMovie, deleteMovie, subtractStars, addStars } = this.props;
    return (
      <div id='content'>
        <div>
          <h4>{`The average rating is ${Math.round(movies.reduce((acc, movie) => {
            acc += movie.star
            return acc;
            },0) / movies.length)}!`}</h4>
          <button onClick={()=>{createMovie(), this.props.load()}}>Generate Random Movie Title</button>
        </div>
        <ul>
          {
            movies.map(movie => {
              return (
                <li key={movie.id}>
                  <button id='deleteButton' onClick={()=>{deleteMovie(movie.id), this.props.load()}}>x</button>
                  {`${movie.movieName}    (${movie.star})`}
                  <button id='starButton' disabled={movie.star === 1} onClick={()=>{subtractStars(movie), this.props.load()}}>-</button>
                  <button id='starButton' disabled={movie.star === 5} onClick={()=>{addStars(movie), this.props.load()}}>+</button>
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
    load: ()=> dispatch(fetchMovies()),
    deleteMovie: (id) => dispatch(deleteMovie(id, history)),
    createMovie: () => dispatch(createMovie(history)),
    subtractStars: (movie) => dispatch(subtractStars(movie)),
    addStars: (movie) => dispatch(addStars(movie))
  }
}
)(Movies);