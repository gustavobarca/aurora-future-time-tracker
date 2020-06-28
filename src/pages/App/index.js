import React, { useState } from 'react';
import './styles.css';
import ProjectsDropdown from '../../components/ProjectsDropdown';
import Task from '../../components/Task';
import TitleBar from '../../components/TitleBar';
import Tabs from '../../components/Tabs';
import IconButton from '../../components/IconButton';
import Screen from '../../components/Screen';
const { ipcRenderer } = window.require('electron');

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

  function openSettings() {
    ipcRenderer.send('toggle-settings');
  }

  function openAddProject() {
    ipcRenderer.send('open-add-project');
  }

  return (
    <Screen>
      <TitleBar />            
      <div className="content">
        <div className="header-content">
          <div style={{ marginTop: 20, marginBottom: 15, display: "flex", flexDirection: "row", justifyContent: "space-between"}}>
            <ProjectsDropdown
              selected={selectedProject}
              projects={[]}
              onAddProjectClick={openAddProject}
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
                onClick={openSettings}          
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
    </Screen>
  );
}