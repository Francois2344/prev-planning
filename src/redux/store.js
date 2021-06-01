import { createStore, combineReducers, applyMiddleware } from 'redux';
import thunk from 'redux-thunk';
import colorReducer from './reducerColor';

const rootReducer = combineReducers({
  color: colorReducer,
});

const store = createStore(rootReducer, applyMiddleware(thunk));

export default store;
