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
import { useParams, useHistory } from 'react-router-dom';

const steps = [
  {
    id: 1,
    column: 'To-do',
    desc: 'Selecione a coluna do seu projeto que guardam as tarefas para fazer.',
  },
  {
    id: 2,
    column: 'Doing',
    desc: 'Selecione a coluna do seu projeto em que ficam as tarefas que estão sendo feitas. ("em progresso" ou "fazendo")',
  },
  {
    id: 3,
    column: 'Done',
    desc: 'Selecione a coluna do seu projeto que guardam as tarefas para fazer.',
  },
];

export default function MapSections() {
  const [sections, setSections] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState();
  const [selectedSections, setSelectedSections] = useState({});
  const [actualStep, setActualStep] = useState(0);
  const { projectGid } = useParams();
  const history = useHistory();

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
  }, [sections]);

  function goNext() {
    if (actualStep === steps.length - 1) {
      console.log(selectedSections);
      return;
    }

    setActualStep(prev => prev + 1);
  }

  function goBack() {
    if (!actualStep) {
      history.goBack();
      return;
    }

    setActualStep(prev => prev - 1);
  }

  function handleOnChange(index) {
    setSelectedSections(prev => ({
      ...prev,
      [actualStep]: index,
    }));
  }

  function renderStep({ column, desc }, index) {
    if (index !== actualStep) return null;

    return (
      <div id="map-sections-steps-container" key={column}>
        <H2 style={{ marginTop: 30 }}>{`Indique a coluna "${column}"`}</H2>
        <Description style={{ marginTop: 10 }}>{desc}</Description>
        <Description>
          Deslize para o lado para ver mais 
          <span role="img" aria-label="slide"> 👉</span>
        </Description>
        <div className="mt-3">
          <SectionsSelect
            onChange={handleOnChange}
            sections={sections}
            selected={selectedSections[actualStep]}
            loading={loading}
          />
        </div>
      </div>
    );
  }

  return (
    <Screen>
      <TitleBar />
      <Content>
        <CenteredContainer>
            {steps.map(renderStep)}
            <div className="mt-3">
              <Button onClick={goBack}>Voltar</Button>
              <Button onClick={goNext} style={{ marginLeft: 20 }}>
                {actualStep === steps.length - 1 ? 'Finalizar' : 'Próximo'}
              </Button>
            </div>
        </CenteredContainer>
      </Content>
    </Screen>
  );
}