import { createStore, applyMiddleware, combineReducers } from 'redux';
import thunk from 'redux-thunk';
import axios from 'axios';

//action types
const SET_MOVIES = 'SET_MOVIES';

const moviesReducer = (state = [], action) => {
  if(action.type === SET_MOVIES) {
    return action.movies;
  }
  return state;
};

//action creators
const setMovies = (movies) => {
  return {
    type: SET_MOVIES,
    movies
  };
};

//thunks

const fetchMovies = ()=> {
  return async(dispatch)=> {
    const movies = (await axios.get('/api/movies')).data;
    dispatch(setMovies(movies));
  }
};

const reducer = combineReducers({
  movies: moviesReducer
});

const store = createStore(reducer, applyMiddleware(thunk));

export default store;

export { fetchMovies };

