import { combineReducers } from 'redux';
import LoginReducer from '../Reducer/LoginReducer/LoginReducer';
import JdReducer from '../Reducer/JdReducer/JdReducer';

const rootReducer = combineReducers({
    login: LoginReducer,
    jdList: JdReducer
});
export default rootReducer;