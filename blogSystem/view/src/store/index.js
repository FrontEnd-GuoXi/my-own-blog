import { createStore, combineReducers, applyMiddleware } from 'redux';
import thunk from 'redux-thunk';
import { login } from './reducer';


export default createStore(
   combineReducers({login}),
   applyMiddleware(thunk)
 )

