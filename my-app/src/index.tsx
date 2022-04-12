import React from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import NoteAppContainer from './components/NoteAppContainer'
import Provider from './store/Provider'
import { createStore } from './store/store'
import { reducer } from './store/reducer'

const container = document.getElementById('root')
const root = createRoot(container as HTMLDivElement)
const store = createStore(reducer)

root.render(
    <React.StrictMode>
        <Provider store={store}>
            <NoteAppContainer />
        </Provider>
    </React.StrictMode>,
)
