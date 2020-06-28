import React, { useState } from 'react';
import './styles.css';
import FontAwesomePro from '../FontAwesomePro';

export default function ProjectsDropdown({ projects, selected, onChange, onAddProjectClick }) {
  const [visible, setVisible] = useState(false);

  function handleOnProjectClick(index) {
    setVisible(false);
    
    if (onChange) onChange(index);
  }

  function toggle() {
    setVisible(prev => !prev);
  }

  function renderDropdownButton() {
    if (!projects.length) {
      return (
        <div className="projects-dropdown-container" onClick={onAddProjectClick}>
          <FontAwesomePro
            icon="plus"
            color="#8A2FFF"
            // type="regular"
            size={16}
          />
          <h3 className="text" style={{ marginLeft: 10 }}>Adicionar projeto</h3>
        </div>
      )
    }

    return (
      <div className="projects-dropdown-container" onClick={toggle}>
        <h3 className="text">{projects[selected].name}</h3>
        <FontAwesomePro
          className={visible ? 'projects-dropdown-chevron-up' : 'projects-dropdown-chevron-down'}
          icon="caret-down"
          color="white"
          type="solid"
        />
      </div>
    )
  }

  return (
    <div>
      {renderDropdownButton()}
      <div className={`projects-dropdown ${visible ? 'projects-dropdown-visible' : 'projects-dropdown-hidden'}`}>
        <ul
          className="projects-dropdown-ul"
          style={{ paddingTop: (projects.lenght > 1) ?  5 : 0 }}
        >
          {projects.map(({ name, value }, index) => (
            <li
              onClick={() => handleOnProjectClick(index)}
              className="projects-dropdown-item"
              key={value}
            >
              <FontAwesomePro
                style={{ marginRight: 10 }}
                icon="folder-open"
                color="rgba(255, 255, 255, 0.3)"
              />
              {name}
            </li>
          ))}
        </ul>
        <ul className="projects-dropdown-ul">
          <li
            onClick={onAddProjectClick}
            className="projects-dropdown-item"
            style={{ color: '#8A2FFF' }}
          >
            <FontAwesomePro
              style={{ marginRight: 10 }}
              icon="plus"
              color="#8A2FFF"
              type="regular"
            />
            Adicionar projeto
          </li>
        </ul>
      </div>
    </div>
  );
}