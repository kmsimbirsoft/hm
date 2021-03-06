import {combineReducers} from 'redux';
import {infoReducer} from './infoReducer';

export const rootReducer = combineReducers({
  info: infoReducer,
});

export type RootState = ReturnType<typeof rootReducer>;
