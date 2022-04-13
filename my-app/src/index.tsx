import React from 'react'
import { createRoot } from 'react-dom/client'

import AppContainer from './components/AppContainer'
import Provider from './store/Provider'

import { store } from './store/store'

import './index.css'

const container = document.getElementById('root')
const root = createRoot(container as HTMLDivElement)

root.render(
    <React.StrictMode>
        <Provider store={store}>
            <AppContainer />
        </Provider>
    </React.StrictMode>,
)
