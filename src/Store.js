import { createStore} from 'redux'
// import countReducer from './redux/counter/CountReducer'
import blogReducer from './redux/blogs/BlogsReducers'


const store = createStore(blogReducer)

export default store