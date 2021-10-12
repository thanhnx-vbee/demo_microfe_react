import React from 'react'
import { Route, Router, Switch } from 'react-router-dom'
import { Button } from './button'
const helloWorld = () => (<div>Hello World!</div>)
const helloReact = () => (<div>Hello React!</div>)

export default ({ history }) => {
    return <div>
        <Router history={history}>
            <Switch>
                <Route path="/" exact component={helloWorld} />
                <Route path="/react" exact component={helloReact} />
                <Route path="/a" exact component={Button} />
                
            </Switch>
        </Router>
    </div>
}