import React, { useState } from 'react';
import './App.css';
import Header from './components/Header/Header';
import Home from './components/Home/Home';
import Contact from './components/Contact/Contact';

function App() {
  //local state
  const [count, setCount] = useState(10);

  return (
    <div className="App">
      <span>Count Value State: {count}</span>
      <Header count={count} setCount={setCount}/>
      <Home count={count} setCount={setCount}/>
      <Contact count={count}/>
    </div>
  );
}

export default App;
