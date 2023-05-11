import logo from './logo.svg';
import './App.css';
import { useEffect, useState } from 'react';

function App() {
  return (
    <div className="App">
      <LoadCountries></LoadCountries>
    </div>
  );
}
function LoadCountries(){
  const[countries,setCountries]= useState([])

  useEffect(()=>{
    fetch('https://restcountries.com/v3.1/all')
    .then(res=>res.json())
    .then(data=>console.log(data))
  },[])
  return(
    <div>
      <h1>Visiting Every og the world!!</h1>
      <h3>Available Countries </h3>
      {
        countries.map(contry=> <p>{contry.name.common}</p>)
      }
    </div>
  )
}
export default App;
