import Connect from '../store/Connect'
import { mapDispatchToProps, mapStateToProps } from '../store/mapToProps'
import App from './App'

const AppContainer = Connect(
    mapStateToProps,
    mapDispatchToProps,
)(App)

export default AppContainer
