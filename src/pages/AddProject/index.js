import React, { useState, useEffect } from 'react';
import Screen from '../../components/Screen';
import TitleBar from '../../components/TitleBar';
import image from '../../assets/images/new_project.png';
import Content, { CenteredContainer } from '../../components/Layout';
import { H2, Description } from '../../components/Text';
import Button from '../../components/Button';
import Dropdown from '../../components/Dropdown';
import { getAllProjects } from '../../services/projects';
import '../../styles/metrics.css';
import './styles.css';
import { useHistory } from 'react-router-dom';

export default function AddProject() {
  const [projects, setProjects] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState();
  const [selectedProject, setSelectedProject] = useState(0);
  const history = useHistory();

  async function getProjects() {
    try {
      const data = await getAllProjects('1160057899333537');
      console.log(data);
      setProjects(data);
    } catch (err) {
      setError(err.message);
    }
  }

  useEffect(() => {
    getProjects();
  }, []);

  useEffect(() => {
    if (projects.length) setLoading(false);
  }, [projects]) 

  function goNext() {
    history.push(`/map-sections/${projects[selectedProject].gid}`)
  }

  function handleOnChange(index) {
    setSelectedProject(index);
  }

  return (
    <Screen>
      <TitleBar />
      <Content>
        <CenteredContainer>
          <div className="add-project-contents">
            <img src={image} alt="add project" width="200" />
            <H2 style={{ marginTop: 30 }}>Adicionar projeto</H2>
            <Description style={{ marginTop: 10 }}>Escolha o projeto:</Description>
            <div className="mt-3">
              <Dropdown
                loading={loading}
                items={projects}
                selected={selectedProject}
                onChange={handleOnChange}
              />
              <Button
                fullWidth
                onClick={goNext}
                style={{ marginTop: 20 }}
              >
                Próximo
              </Button>
            </div>
          </div>
        </CenteredContainer>
      </Content>
    </Screen>
  );
}