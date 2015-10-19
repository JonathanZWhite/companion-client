import * as ActionTypes from '../constants/ActionTypes';
import merge from 'lodash/object/merge';
import paginate from './paginate';
import { routerStateReducer as router } from 'redux-router';
import { combineReducers } from 'redux';

const initialState = {
    digest: {
        articles: []
    }
};

export default function digest(state = initialState.digest, action) {
    switch (action.type) {
        case ActionTypes.RECEIVE_DIGEST:
            return Object.assign({}, state, {
                articles: action.data
            });
        default:
            return state;
    }
}

// Updates an entity cache in response to any action with response.entities.
function entities(state = { users: {}, repos: {} }, action) {
  if (action.response && action.response.entities) {
    return merge({}, state, action.response.entities);
  }

  return state;
}

// Updates error message to notify about the failed fetches.
function errorMessage(state = null, action) {
  const { type, error } = action;

  if (type === ActionTypes.RESET_ERROR_MESSAGE) {
    return null;
  } else if (error) {
    return action.error;
  }

  return state;
}

// Updates the pagination data for different actions.
const pagination = combineReducers({
  // starredByUser: paginate({
  //   mapActionToKey: action => action.login,
  //   types: [
  //     ActionTypes.STARRED_REQUEST,
  //     ActionTypes.STARRED_SUCCESS,
  //     ActionTypes.STARRED_FAILURE
  //   ]
  // }),
  // stargazersByRepo: paginate({
  //   mapActionToKey: action => action.fullName,
  //   types: [
  //     ActionTypes.STARGAZERS_REQUEST,
  //     ActionTypes.STARGAZERS_SUCCESS,
  //     ActionTypes.STARGAZERS_FAILURE
  //   ]
  // })
});

const rootReducer = combineReducers({
    digest,
    router
});

export default rootReducer;
