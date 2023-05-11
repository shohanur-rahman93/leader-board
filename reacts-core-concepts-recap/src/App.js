import logo from './logo.svg';
import './App.css';
import { useState } from 'react';

function App() {
  return (
    <div className="App">
      <LoadPosts></LoadPosts>
      <District name="Noakhali" special="vibag"></District>
      <District name="Sumila" special=" sumila"></District>
      <District name="Braamobaria" special="Jorada"></District>
    </div>
  );
}
function LoadPosts(){
  return(
    <div>
      <h1>Posts:</h1>
    </div>
  )
}

const districtStyle = {
  backgroundColor: 'red',
  margin: '20px',
  borderRadius: '20px'

}

function District(props) {
  const [ power, setPower] = useState(1);


  const boostPower = () => {
    const newPower = power * 2;
    setPower(newPower);
  }


  return (
    <div style={districtStyle}>
      <h2>Name:{props.name}</h2>
      <h4>Power :{Power}</h4>
      <button onClick={boostPower}>Boost The Power</button>
      <p>Saciality:{props.special}</p>
    </div>
  )
}
export default App;
