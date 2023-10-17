import { ADD,REMOVE } from "./types"

const initialState = {
    blogs:[{id:1,title:'Flutter',body:'best mobile dev tool'},
        {id:2,title:'React',body:'best web dev tool'}]
}

const blogReducer = (state = initialState,action)=>{
    switch(action.type){
        case ADD:return{
            ...state,
            blogs:[...state.blogs,action.payload]
        }
        case REMOVE:return{
            ...state,
            blogs:state.blogs.filter((blog)=>(blog.id!==action.id))
        }
        default:return state
    }
}

export default blogReducer