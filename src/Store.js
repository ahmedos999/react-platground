import { createStore} from 'redux'
import countReducer from './redux/counter/CountReducer'

const store = createStore(countReducer)

export default store