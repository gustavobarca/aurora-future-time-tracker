import React from 'react';
import './styles.css';
import ProjectsDropdown from '../../components/ProjectsDropdown';
import Task from '../../components/Task';

export default function App() {
  return (
    <div className="background">
      <ProjectsDropdown title="Condutor" />
      <Task />
      <Task />
      <Task />
    </div>
  );
}