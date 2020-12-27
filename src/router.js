import React from 'react';
import {BrowserRouter as Router, Switch, Route} from 'react-router-dom'

import Products from './Views/products/Products'
import Login from './Views/login/login'

const AppRouter = (props) => {
    return ( 
        <Router>
            <Switch>
                <Route exact path={["/", "/login"]} component={Login} />    
                <Route exact path="/products" component={Products} />    
            </Switch> 
        </Router>
     );
}
 
export default AppRouter;