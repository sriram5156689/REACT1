import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'



function App() {
  alert ("my name is sriram");
  const name ={
    name:"sriram",
    age:19,
  };
  const containerStyle = {
    display: 'flex',
    justifyContent: 'center', // Centers horizontally
    alignItems: 'center', // Centers vertically
    height: '100vh', // Full viewport height
};
console.log("age="+name.age);

return (
  <div style={containerStyle}>
    <div className='a'>
      <p style={{ fontSize: '100px', color: 'WHITE' }}>
          <h1>name:{name.name}</h1>
      </p>
    </div>
  </div>
  )
}

export default App
