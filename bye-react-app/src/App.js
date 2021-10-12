import React from 'react';
import { Route, Router, Switch } from 'react-router-dom';
import { Button } from './button';
const helloReact = () => (<div>Hello React!</div>)

export const App = ({history}) => {
    return <div>
          <Router history={history}>
            <Switch>
                <Route path="/a" exact component={helloReact} />
                <Route path="/" exact component={Button} />
            </Switch>
        </Router>
    </div>
}