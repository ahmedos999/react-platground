import React, { useState } from 'react'

export default function Home() {
    const [counter,setCounter] =  useState(0)
    const handleClick = ()=>{
        setCounter(counter+1)
    }
    const [blogs,setBlogs] = useState([
        {id:1,title:'Flutter',body:'best mobile dev tool'},
        {id:2,title:'React',body:'best web dev tool'}
    ])

  return (
    <div>
        <h2>{counter}</h2>
        <button onClick={handleClick}>increase</button>
        {blogs.map((blog)=>(
            <div key={blog.id}>
                <h3>{blog.title}</h3>
                <p>{blog.body}</p>
            </div>

        ))}
    </div>

  )
}
