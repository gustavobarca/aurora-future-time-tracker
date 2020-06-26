import React, { useState } from 'react';
import './styles.css';
import ProjectsDropdown from '../../components/ProjectsDropdown';
import Task from '../../components/Task';
import TitleBar from '../../components/TitleBar';
import Tabs from '../../components/Tabs';
import IconButton from '../../components/IconButton';
const {ipcRenderer} = window.require('electron');

const projects = [
  { name: 'Condutor', value: '1' },
  { name: 'Vale', value: '2' },
  { name: 'Sisatec', value: '3' },
  { name: 'Logistica', value: '4' },
  { name: 'Neo', value: '5' },
  { name: 'LiaTech', value: '6' },
  { name: 'Rhoferaço', value: '7' },
  { name: 'Proseg', value: '8' },
  { name: 'Sindicato dos Trabalhadores', value: '9' },
];

const tabs = [
  { name: 'To-do' },
  { name: 'Code review' },
];

export default function App() {
  const [activeTab, setActiveTab] = useState(0);
  const [selectedProject, setSelectedProject] = useState(0);
  const [times, setTimes] = useState({
    1: true,
    2: false,
    3: false,
    4: false,
    5: false,
  });

  function handleOnSetTimes(taskID) {
    setTimes(prev => ({
      ...prev,
      [taskID]: !prev[taskID],
    }))
  }

  const showSettings = () => {
    ipcRenderer.send('toggle-settings');
  }


  return (
    <div className="background">
      <TitleBar />            
      <div className="content">
        <div className="header-content">
          <div style={{ marginTop: 20, marginBottom: 15, display: "flex", flexDirection: "row", justifyContent: "space-between"}}>
            <ProjectsDropdown
              selected={selectedProject}
              projects={projects}
              title="Condutor"
              onChange={index => setSelectedProject(index)}
            />
            <div>
              <IconButton
                icon="sync-alt"
                iconColor="#BBB"
                iconSize={14}
                iconType="regular"
                color="#333"
                animated={true}            
              />
              <IconButton
                icon="cog"
                iconColor="#BBB"
                iconSize={14}
                iconType="solid"
                color="#333"
                style={{marginLeft: 8}}
                onClick={() => showSettings()}          
                />
            </div>
          </div>

          <Tabs
            tabs={tabs}
            activeTab={activeTab}
            onChange={index => setActiveTab(index)}
          />
        </div>
        <div className="tab-content-container">
          <Task
            title="[Condutor Mobile] - Checklist - Salvar Rascunho"
            column="Doing"
            started={times[1]}
            onStart={() => handleOnSetTimes(1)}
          />
          <Task
            title="[Condutor Mobile] - Checklist - Salva"
            column="Doing"
            started={times[2]}
            onStart={() => handleOnSetTimes(2)}
          />
          <Task
            title="[Condutor Mobile] - Checklist - Salvar Rascunho"
            column="Doing"
            started={times[3]}
            onStart={() => handleOnSetTimes(3)}
          />
          <Task
            title="[Condutor Mobile] - Checklist - Salvar Rascunho"
            column="Doing"
            started={times[4]}
            onStart={() => handleOnSetTimes(4)}
          />
          <Task
            title="[Condutor Mobile] - Checklist - Salvar Rascunho"
            column="Doing"
            started={times[5]}
            onStart={() => handleOnSetTimes(5)}
          />
        </div>
      </div>
    </div>
  );
}