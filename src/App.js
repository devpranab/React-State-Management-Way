import React, { createContext, useState } from 'react';
import './App.css';
import Header from './components/Header/Header';
import Home from './components/Home/Home';
import Contact from './components/Contact/Contact';

export const CategoryContext = createContext();

function App() {
  //local state
  const [count, setCount] = useState(10);

  return (
    <div className="App">

      <CategoryContext.Provider value="laptop"> {/* value={count} -or dynamic value */}
      <span>Count Value State: {count}</span>
      <Header count={count} setCount={setCount}/>
      <Home count={count} setCount={setCount}/>
      <Contact count={count}/>
      </CategoryContext.Provider>
     
    </div>
  );
}

export default App;
