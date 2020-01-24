import React, { useState, useEffect } from 'react';

import api from './services/api';

import './global.css';
import './App.css';
import './Sidebar.css';
import './Main.css';

import DevItem from './components/DevItem';
import DevForm from './components/DevForm';
import { EditDevProvider } from './context/EditDevContext';

function App() {
  const [devs, setDevs] = useState([]);

  useEffect(() =>{
    async function loadDevs() {
      const response = await api.get('/devs') ;
      setDevs(response.data);
    }    
    loadDevs();
  }, []);

  async function handleAddDev(devData) {
    const { data: newDev, status } = await api.post('/devs', devData);
    
    const devIndex = devs.findIndex(
      dev => dev.github_username === newDev.github_username
    );

    if (devIndex === -1) {
      setDevs([...devs, newDev]);
    }else if(status === 200){
      const{ data: updatedDev } = await api.put('/devs', devData);
      devs.splice(devIndex, 1);
      setDevs([...devs, updatedDev]);
    }
  }

  async function handleDeleteDev(devGithubUsername) {
    await api.delete(`/devs/${devGithubUsername}`);

    const newDevs = devs.filter(dev => dev.github_username !== devGithubUsername);
    setDevs(newDevs);
  }

  return (
    <EditDevProvider>
      <div id="app">
        <aside>
          <strong>Cadastrar</strong> 
          <DevForm onSubmit={handleAddDev}/>
        </aside>
        <main>
          {devs.length > 0 ? (
            <ul>
              {devs.map(dev => (
                <DevItem key={dev._id} dev={dev} deleteDev={handleDeleteDev}/>
              ))}
            </ul>
          ) : (
            <p>Nenhum desenvolvedor cadastrado.</p>
          )}
        </main>
      </div>
    </EditDevProvider>
  );
}

export default App;
