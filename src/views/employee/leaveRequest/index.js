import React from 'react';
import { Redirect, Route, Switch } from 'react-router-dom';

import leavePendingList from '../../leave-request-table/pending';
import leaveApprovedList from '../../leave-request-table/approved';
import leaveRejectedList from '../../leave-request-table/rejected';

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