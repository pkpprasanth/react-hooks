import React ,{useState,useEffect} from 'react'
import './App.css';

function App() {

  const [value, setCount] = useState(1);

var count =()=>setCount(value+1)

var count1 =()=>setCount(value-1)

useEffect(()=>{
  alert(`Your count is ${value}`)
})

  return (
    <div>
     <h1>Count {value}</h1>
     <button onClick={count}>Count + </button>
     <button onClick={count1}>Count - </button>
     <button onClick={()=>setCount(value+1)}>setCount</button>
    </div>
  );
}

export default App;
