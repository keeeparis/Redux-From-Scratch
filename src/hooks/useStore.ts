import { useContext } from 'react'
import { Context } from '../context/context'

export default function useStoreContext() {
    const { store } = useContext(Context)
    return store
}
