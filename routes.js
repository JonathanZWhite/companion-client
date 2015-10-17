import React from 'react';
import { Route } from 'react-router';
import App from './containers/App';
import UserPage from './containers/UserPage';
import RepoPage from './containers/RepoPage';
import DigestPage from './containers/DigestPage';

export default (
    <Route path="/" component={App}>
        <Route
            path="/digest"
            component={DigestPage}/>
    </Route>
);

// <Route path="/:login/:name"
//     component={RepoPage} />
// <Route path="/:login"
//     component={UserPage} />
