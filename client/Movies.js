import React from 'react';
import { connect } from 'react-redux';
import CreateMovie from './CreateMovie';

const Movies = ({ movies })=> {
  return (
    <div id='content'>
      <CreateMovie />
      <ul>
        {
          movies.map(movie => {
            return (
              <li key={movie.id}>
                <button id='deleteButton'>x</button>
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

export default connect(({ movies })=> {
  return {
    movies
  }
})(Movies);