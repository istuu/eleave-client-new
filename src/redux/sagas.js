import { all } from 'redux-saga/effects';
import employeeListSagas from './employeeList/saga';
import leaveListSagas from './leaveList/saga';
import userSagas from './user/saga';
import authSagas from './auth/saga';
import todoSagas from './todo/saga';
import chatSagas from './chat/saga';
import surveyListSagas from './surveyList/saga';
import surveyDetailSagas from './surveyDetail/saga';

export default function* rootSaga(getState) {
  yield all([
    employeeListSagas(),
    leaveListSagas(),
    userSagas(),
    authSagas(),
    
    todoSagas(),
    chatSagas(),
    surveyListSagas(),
    surveyDetailSagas()
  ]);
}
