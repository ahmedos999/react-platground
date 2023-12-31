import React, { useState } from 'react'
import { connect } from 'react-redux'
// import { incerment,decerment } from './redux/counter/Actions'
import { add,remove } from './redux/blogs/Actions'
function Home(props) {
    console.log(props.blogs)
    const [inputValue,setInputValue] =  useState('aaa')
    const [inputValue2,setInputValue2] =  useState('aaa')
    const handleInputChange = (event)=>{
        setInputValue(event.target.value)
    }
    const handleInputChange2 = (event)=>{
        setInputValue2(event.target.value)
    }
    const additemtostate= (inputValue)=>{
        props.add({id:3,title:inputValue,body:inputValue2})
    }
    // const handleClick = ()=>{
    //     setCounter(counter+1)
    // }
    // const [blogs,setBlogs] = useState([
    //     {id:1,title:'Flutter',body:'best mobile dev tool'},
    //     {id:2,title:'React',body:'best web dev tool'}
    // ])
    // useEffect(()=>{
    //     console.log('hello')
    // },[])

  return (
    <div>
        {
            props.blogs.map((blog)=>(
                <div key={blog.id}>
                    <h4>{blog.title}</h4>
                    <p>{blog.body}</p>
                </div>
            ))
        }
        <input
          type="text"
          value={inputValue}
          onChange={handleInputChange}
        />
        <input
          type="text"
          value={inputValue2}
          onChange={handleInputChange2}
        />
        <button onClick={()=>additemtostate(inputValue)}>add to List</button>
        <button onClick={()=>props.remove(1)}>decrease</button>
        
    </div>

  )
}

const mapStateToProps = state =>{
    return{
        blogs:state.blogs
    }
}
const mapDispatchToProps = dispatch =>{
    return {
        add:(blog)=>dispatch(add(blog)),
        remove:(id)=>dispatch(remove(id))
    }
}
export default connect(mapStateToProps,mapDispatchToProps)(Home)