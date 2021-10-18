import postReducer from "./postReducer";
import changeTheSearchValue from "./search"
import changeThePage from "./pagination"

import { combineReducers } from 'redux';

const rootReducer = combineReducers({
	postReducer,
	changeTheSearchValue,
	changeThePage
});

export default rootReducer;