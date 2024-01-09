import React from 'react';
import { useState } from "react";
import './App.css';

 function App() {

const [advice,setAdvice]= useState("");
const [count,setCount]= useState(0);

async function getAdvice (){
const res= await fetch ('https://api.adviceslip.com/advice');
const data= await res.json();
setAdvice(data.slip.advice);
setCount(c=> c+1);
}



  return (
    <div className="container">
    <div className="up">
    <button onClick={getAdvice}>Pobierz radę</button>
    <p>Liczba twoich rad na dziś {count}</p>
    </div>
    <h1>{advice}</h1>
    </div>
  );
}

 
export default App;