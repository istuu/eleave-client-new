import React from 'react';
import { Redirect, Route, Switch } from 'react-router-dom';

import leavePendingList from './pending';
import leaveApprovedList from './approved';
import leaveRejectedList from './rejected';

const LeaveRequest = ({ match }) => (
    <div className="dashboard-wrapper">
        <Switch>
            <Redirect exact from={`${match.url}/`} to={`${match.url}/pending`} />
            <Route path={`${match.url}/pending`} component={leavePendingList} />
            <Route path={`${match.url}/approved`} component={leaveApprovedList} />
            <Route path={`${match.url}/rejected`} component={leaveRejectedList} />
            <Redirect to="/error" />
        </Switch>
    </div>
);
export default LeaveRequest;