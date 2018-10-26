import React from 'react';
import { Route, Switch } from 'react-router-dom';
import App from './App'
import Form from './src/component/Form/Form';


export default(
    <Switch>
        <Route exact path='/' component={App} />
        <Route path='/form' component={Form} />
    </Switch>
)



