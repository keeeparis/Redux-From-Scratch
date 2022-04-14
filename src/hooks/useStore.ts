import { useContext } from 'react'
import { Context } from '../context/context'

export default function useStore() {
    const ctx = useContext(Context)
    if (!ctx) {
        throw new Error('Store does not exist!')
    }
    return ctx.store
}
