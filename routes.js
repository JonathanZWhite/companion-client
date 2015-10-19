import React from 'react';
import { Route } from 'react-router';
import App from './containers/App';
import UserPage from './containers/UserPage';
import RepoPage from './containers/RepoPage';
import DigestPage from './containers/DigestPage';
import NotesPage from './containers/NotesPage';

export default (
    <Route path="/" component={App}>
        <Route
            path="/digest"
            component={DigestPage}/>
        <Route
            path="/notes"
            component={NotesPage}/>
    </Route>
);
