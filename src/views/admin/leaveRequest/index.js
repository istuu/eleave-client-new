import React from 'react';
import { Redirect, Route, Switch } from 'react-router-dom';

import leavePendingList from './pending';

const LeaveRequest = ({ match }) => (
    <div className="dashboard-wrapper">
        <Switch>
            <Redirect exact from={`${match.url}/`} to={`${match.url}/pending`} />
            <Route path={`${match.url}/pending`} component={leavePendingList} />
            <Redirect to="/error" />
        </Switch>
    </div>
);
export default LeaveRequest;