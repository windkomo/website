import 'babel-polyfill'
import React from 'react'
import { render } from 'react-dom'
import { Router, Route, IndexRoute, browserHistory } from 'react-router'

import AppContainer from './containers/AppContainer'
import MainLayout from './components/layout/MainLayout'

import Home from './components/pages/Home'
import About from './components/pages/About'

require('../assets/styles/main.styl')

render(
    <Router history={ browserHistory }>
        <Route path="/" component={ AppContainer }>
            <Route component={ MainLayout }>
                <IndexRoute component={ Home } />
                <Route path="/about" component={ About } />
            </Route>
        </Route>
    </Router>,
    document.getElementById('app')
)
