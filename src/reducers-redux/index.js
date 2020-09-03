import {combineReducers} from 'redux'
import basketReducer from './basketReducer'


export default combineReducers({
  basketState: basketReducer
});
// con basketState es como exportamos todos nuestros reducers 