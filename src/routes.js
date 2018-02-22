import React, { Fragment } from 'react';
import { Route } from 'react-router-dom';
import Login from './components/Login';
import Account from './components/Account';

export default <Fragment>
    <Route exact path="/(access_token.*)?" component={Login} />
    <Route path="/private" component={Account} />
</Fragment>