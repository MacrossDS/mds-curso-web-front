import React from "react";
import { BrowserRouter as Router, Switch, Route, Redirect } from "react-router-dom";
import { useSelector } from "react-redux";

import Products from "./Views/products/Products";
import Login from "./Views/login/login";
import Error404 from "./Components/Messages/404";

const AppRouter = (props) => {
    return (
        <Router>
            <Switch>
                <Route exact path={["/", "/login"]} component={Login} />
                <PrivateRoute>
                    <Route exact path="/products" component={Products} />
                </PrivateRoute>
                {/* <Route path="*" component={Error404} /> */}
            </Switch>
        </Router>
    );
};

function PrivateRoute({ children, ...rest }) {
    
    const sesion = useSelector(state => state.sesion)

    return (
        <Route
            {...rest}
            render={({ location }) =>
                sesion.token ? (
                    children
                ) : (
                    <Redirect
                        to={{
                            pathname: "/login",
                            state: { from: location },
                        }}
                    />
                )
            }
        />
    );
}

export default AppRouter;
