import React, { useState } from 'react';
import './App.css';
import Collaborate from './Collaborate/Collaborate';
import Contact from './Contact/Contact';
import Docs from './Docs/Docs';
import Header from './Header/Header';
import Home from './Home/Home';

function App() {
  const [activePage, setActivePage] = useState('home');
  const renderElement = () => {
    if(activePage === 'home'){
      return  <Home setActivePage={setActivePage}/>
    }
    if(activePage === 'collaborate'){
      return  <Collaborate/>
    }
    if(activePage === 'docs'){
      return  <Docs/>
    }
    if(activePage === 'contact'){
      return  <Contact/>
    } return null
  }

  return (
    <div className="App">
      <Header setActivePage={setActivePage} activePage={activePage}/>
      {
        renderElement()
      }
    </div>
  );
}


export default App;
