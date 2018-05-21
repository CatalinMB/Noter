import { combineReducers } from 'redux';
import { routerReducer } from '@angular-redux/router';

export interface IAppState { route?: string; }

export default combineReducers<IAppState>({
  // your reducers..
  router: routerReducer
});