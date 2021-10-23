import React from 'react';
import { BrowserRouter as Router, Switch, Route, Redirect } from 'react-router-dom';
import FundTransfer from './scenes/FundTransfer';

const Routes = () => {
    return (
        <Router>
         <Switch>
             <Route path="/login" render={() => <h1> Login </h1>} />
             <Route path="/transfer" component={FundTransfer} />
             <Redirect to="/transfer" />
         </Switch>
        </Router>
    )
}

export default Routes;