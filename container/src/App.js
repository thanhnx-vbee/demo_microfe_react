
import { createBrowserHistory } from "history";
import React from 'react';
import { Link, Route, Router, Switch } from "react-router-dom";
import HelloReactApp from './components/HelloReactApp';
import ByeReactApp from './components/ByeReactApp';
const history = createBrowserHistory();

const Header = () => (
    <div>
        <Link to='/'>home</Link><br />
        <Link to='/react'>use react</Link>
    </div>
)

export default () => {
    console.log('history', history)
    return (
        <Router history={history}>
            <Header />
            <hr />
            <Switch>
                <Route path='/' component={HelloReactApp} />
            </Switch>
            <Switch>
                <Route path='/' component={ByeReactApp} />
            </Switch>
        </Router>
    )
}