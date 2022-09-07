import React, { createContext, useState } from 'react';
import './App.css';
import Header from './components/Header/Header';
import Home from './components/Home/Home';
import Contact from './components/Contact/Contact';

export const CategoryContext = createContext();

function App() {
  //local state
  const [category, setCategory] = useState('laptop');

  return (
    <div className="App">

      {/* <CategoryContext.Provider value="laptop"> or*/}
      <CategoryContext.Provider value={[category, setCategory]}> {/* dynamic value */}
      <span>Count Value State: {category}</span>
      <Header/>
      <Home/>
      <Contact/>
      </CategoryContext.Provider>
     
    </div>
  );
}

export default App;
