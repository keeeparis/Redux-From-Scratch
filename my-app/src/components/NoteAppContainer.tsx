import connect from '../store/connect'
import { mapDispatchToProps, mapStateToProps } from '../store/react-redux'
import NoteApp from './NoteApp'

const NoteAppContainer = connect(
    mapStateToProps,
    mapDispatchToProps,
)(NoteApp)

export default NoteAppContainer
