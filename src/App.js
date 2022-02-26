import React, { useState } from 'react';

import { SideBarPage } from './pages/SideBarPage';

import './App.css';
import { HeaderPage } from './pages/Header';



function App() {
  const [isNavBar, setIsNavBar] = useState(false);

  return (
    <div className="app">
      <HeaderPage isNavBar={isNavBar} setIsNavBar={setIsNavBar} />
      <SideBarPage isNavBar={isNavBar} setIsNavBar={setIsNavBar} />
    </div>
  );
}

export default App;
