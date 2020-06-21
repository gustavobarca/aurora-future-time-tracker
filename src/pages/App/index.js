import React from 'react';
import './styles.css';
import ProjectsDropdown from '../../components/ProjectsDropdown';
import Task from '../../components/Task';
import TitleBar from '../../components/TitleBar';


export default function App() {
  return (
    <div className="background">
      <TitleBar />            
      <div className="bodytask">          
        <ProjectsDropdown title="Condutor" />
        <Task />
        <Task />
        <Task /> 
      </div>
    </div>
  );
}