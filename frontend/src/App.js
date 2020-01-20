import React, { useState, useEffect } from 'react';

import api from './services/api';

import './global.css';
import './App.css';
import './Sidebar.css';
import './Main.css';

function App() {
  return (
    <div className="App">
      <aside>
        <strong>Cadastrar</strong>
      </aside>
      <main>
        <h1>hello main</h1> 
      </main>
    </div>
  );
}

export default App;
