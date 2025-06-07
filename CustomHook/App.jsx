import React from 'react'
import useFetchData from './useFetchData'

const App = () => {
  const {data}=useFetchData("https://jsonplaceholder.typicode.com/posts")
  //console.log(data[0]);
  return (
    <div>
      <h1>Hello</h1>
      <div className="container">
        {data.map((val,key)=>{
          return <li key={key}>{val.title}</li>
        })}
      </div>
    </div>
  )
}

export default App
