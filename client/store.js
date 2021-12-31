import { createStore, applyMiddleware, combineReducers } from 'redux';
import loggingMiddleware from 'redux-logger';
import thunk from 'redux-thunk';
import axios from 'axios';

//action types
const SET_MOVIES = 'SET_MOVIES';
const CREATE_MOVIE = 'CREATE_MOVIE';
const DELETE_MOVIE = 'DELETE_MOVIE';

const moviesReducer = (state = [], action) => {
  if(action.type === SET_MOVIES) {
    return action.movies;
  }
  if(action.type === CREATE_MOVIE) {
    return [...state, action.movie]
  }
  if(action.type === DELETE_MOVIE) {
    return state.filter(movie => movie.id !== action.movie.id);
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

const _createMovie = (movie) => {
  return {
    type: CREATE_MOVIE,
    movie
  }
};

const _deleteMovie = (movie) => {
  return {
    type: DELETE_MOVIE,
    movie
  }
};

//thunks

export const fetchMovies = ()=> {
  return async(dispatch)=> {
    const movies = (await axios.get('/api/movies')).data;
    dispatch(setMovies(movies));
  }
};

export const createMovie = (history)=> {
  return async(dispatch)=> {
    const {data: created} = await axios.post('/api/movies')
    dispatch(_createMovie(created));
    // history.push('/'); <--turned since react-router turned off
  }
};

export const deleteMovie = (id, history) => {
  return async(dispatch) => {
    await axios.delete(`/api/movies/${id}`);
    dispatch(_deleteMovie({ id }));
    // history.push('/'); <--turned since react-router turned off
  }
};

const reducer = combineReducers({
  movies: moviesReducer
});

const store = createStore(reducer, applyMiddleware(thunk, loggingMiddleware));

export default store;

