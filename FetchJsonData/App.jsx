import { useEffect, useState } from "react";
import "./App.css";

function App() {
  const [data, setData] = useState([]);

  useEffect(() => {
    const request = async () => {
      const response = await fetch(
        "https://jsonplaceholder.typicode.com/posts"
      );
      const res=await response.json();
      setData(res);
      
    };
     request()
  }, []);

  console.log(data);

  return (
    <>
      <h1 className="heading">All Data</h1>
      <div className="main-body">
        {data.map((value,key)=>{
          return(
            <div key={key} className="card">
              <h3>{value.title}</h3>
              <p>{value.body}</p>
            </div>
          )
        })}
      </div>
    </>
  );
}

export default App;
