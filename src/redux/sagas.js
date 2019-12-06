import { all } from 'redux-saga/effects';
import employeeListSagas from './employeeList/saga';
import leaveListSagas from './leaveRequest/list/saga';
import leaveDeleteSagas from './leaveRequest/delete/saga';
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
    leaveDeleteSagas(),
    userSagas(),
    authSagas(),
    todoSagas(),
    chatSagas(),
    surveyListSagas(),
    surveyDetailSagas()
  ]);
}
