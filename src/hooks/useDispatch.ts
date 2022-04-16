import useStoreContext from './useStore'

const useDispatch = () => {
    const { dispatch } = useStoreContext()
    return dispatch
}

export default useDispatch
