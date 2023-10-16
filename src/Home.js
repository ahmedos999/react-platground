// import React, { useEffect, useState } from 'react'
import { connect } from 'react-redux'
import { incerment,decerment } from './redux/counter/Actions'
function Home(props) {
    // const [counter,setCounter] =  useState(0)
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
        <h2>{props.count}</h2>
        <button onClick={props.incerment}>increase</button>
        <button onClick={props.decerment}>decrease</button>
    </div>

  )
}

const mapStateToProps = state =>{
    return{
        count:state.count
    }
}
const mapDispatchToProps = dispatch =>{
    return {
        incerment:()=>dispatch(incerment()),
        decerment:()=>dispatch(decerment())
    }
}
export default connect(mapStateToProps,mapDispatchToProps)(Home)