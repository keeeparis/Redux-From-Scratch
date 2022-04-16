import React from 'react'
import { createRoot } from 'react-dom/client'

import Provider from './context/Provider'

import { store } from './store/store'

import './index.css'
import Step from './components/Step'
import Counter from './components/Counter'

const container = document.getElementById('root')
const root = createRoot(container as HTMLDivElement)

root.render(
    <Provider store={store}>
        <Step />
        <Counter />
    </Provider>,
)
