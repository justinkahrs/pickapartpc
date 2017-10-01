import { combineReducers } from 'redux';
import caseSize from './case';
import cpu from './cpu';
import multitasking from './multitasking';

const rootReducer = combineReducers({
  caseSize,
  cpu,
  multitasking,
});
export default rootReducer;
