import { createContext } from 'react'
import { StoreType } from '../store/store'

export type ContextType = {
    store: StoreType
}

export const Context = createContext<ContextType | null>(null)
