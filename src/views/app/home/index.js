import React from 'react';
import { Redirect, Route, Switch } from 'react-router-dom';

import homeDash from './home';

const Home = ({ match }) => (
    <div className="dashboard-wrapper">
        <Switch>
            <Route path={`${match.url}/`} component={homeDash} />
            <Redirect to="/error" />

        </Switch>
    </div>
);
export default Home;