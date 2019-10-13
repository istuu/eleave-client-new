import React from 'react';
import { Redirect, Route, Switch } from 'react-router-dom';

import employeeList from './list';
import employeeAdd from './add';

const Home = ({ match }) => (
    <div className="dashboard-wrapper">
        <Switch>
            <Redirect exact from={`${match.url}/`} to={`${match.url}/list`} />
            <Route path={`${match.url}/list`} component={employeeList} />
            <Route path={`${match.url}/add`} component={employeeAdd} />
            <Redirect to="/error" />

        </Switch>
    </div>
);
export default Home;