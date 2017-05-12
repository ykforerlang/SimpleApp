import React from 'react'
import { AppRegistry } from 'react-native'
import { Provider } from 'react-redux'
import { createStore, applyMiddleware } from 'redux'
import logger from 'redux-logger'
import AppReducer from './reducers'
import AppWithNavigationState from './components'

const store = createStore(AppReducer, applyMiddleware(logger));

const SimpleApp = () =>  (
    <Provider store={store}>
        <AppWithNavigationState/>
    </Provider>
)


AppRegistry.registerComponent('SimpleApp', () => SimpleApp);

