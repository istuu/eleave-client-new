import { combineReducers } from 'redux';
import employeeListApp from './employeeList/reducer';
import leaveListApp from './leaveRequest/list/reducer';
import leaveDeleteApp from './leaveRequest/delete/reducer';
import userApp from './user/reducer';
import settings from './settings/reducer';
import menu from './menu/reducer';
import authUser from './auth/reducer';
import todoApp from './todo/reducer';
import chatApp from './chat/reducer';
import surveyListApp from './surveyList/reducer';
import surveyDetailApp from './surveyDetail/reducer';

const reducers = combineReducers({
  employeeListApp,
  leaveListApp,
  leaveDeleteApp,
  userApp,
  menu,
  settings,
  authUser,
  todoApp,
  chatApp,
  surveyListApp,
  surveyDetailApp
});

export default reducers;