// helloReact/src/bootstrap.js
import { createBrowserHistory } from 'history'
import React from 'react'
import ReactDOM from 'react-dom'
import { App } from './App'
const mount = (el) => {
    const history = createBrowserHistory()
    console.log('history', history)
    ReactDOM.render(
        <App history={history} />,
        el
    )

    return {
        onParentNavigate({ pathname: nextPathname }) {
            const { pathname } = history.location
            if (pathname !== nextPathname) {
                history.push(nextPathname)
            }
        }
    }
}

if (process.env.NODE_ENV === 'development') {
    const devRoot = document.querySelector('#app2')
    console.log('devRoot',devRoot)
    if (devRoot) {
        mount(devRoot)
    }
}

export { mount }

