import React from 'react';
import { Router, Route, Switch } from 'react-router-dom';

import Header from './Header';
import ProjectList from './projects/ProjectList';
import history from '../history';
const App = () => {
    return (
        <div className="ui container">
            <Router history={history}>
                <div>
                    <Header />
                    <Switch>
                        <Route path="/" exact component={ProjectList} />
                    </Switch>
                </div>
            </Router>
        </div>
    );
};

export default App;
