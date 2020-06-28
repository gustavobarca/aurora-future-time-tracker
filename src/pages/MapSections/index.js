import React, { useState, useEffect } from 'react';
import Screen from '../../components/Screen';
import TitleBar from '../../components/TitleBar';
import Content, { CenteredContainer } from '../../components/Layout';
import { H2, Description } from '../../components/Text';
import Button from '../../components/Button';
import '../../styles/metrics.css';
import './styles.css';
import { getAllSections } from '../../services/sections';
import SectionsSelect from '../../components/SectionsSelect';
import { useParams } from 'react-router-dom';

export default function MapSections() {
  const [sections, setSections] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState();
  const [selectedSection, setSelectedSection] = useState(0);
  const { projectGid } = useParams();

  async function getSections() {
    try {
      const data = await getAllSections(projectGid);
      setSections(data);
    } catch (err) {
      setError(err.message);
    }
  }

  useEffect(() => {
    getSections();
  }, []);

  useEffect(() => {
    if (sections.length) setLoading(false);
  }, [sections]) 

  function goNext() {
    
  }

  function handleOnChange(index) {
    setSelectedSection(index);
  }

  return (
    <Screen>
      <TitleBar />
      <Content>
        <CenteredContainer>
          <div style={{ width: '100%', backgroundColor: 'green' }}>
            <H2 style={{ marginTop: 30 }}>Indique a coluna To-do</H2>
            <Description style={{ marginTop: 10 }}>
              Selecione a coluna do seu projeto que guardam as tarefas para fazer
            </Description>
            <div className="mt-3">
              <SectionsSelect
                onChange={handleOnChange}
                sections={sections}
                selected={selectedSection}
                loading={loading}
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