import React from 'react';
import { connect } from 'react-redux';

const Movies = ({ movies })=> {
  return (
    <div id='content'>
      <div>
        <button>Generate Random Movie Title</button>
      </div>
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