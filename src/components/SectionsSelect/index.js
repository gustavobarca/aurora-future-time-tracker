import React from 'react';
import FontAwesomePro from '../FontAwesomePro';
import { PulseLoader } from "react-spinners";
import './styles.css';

export default function SectionsSelect({ sections, selected, onChange, loading }) {
  if (loading) {
    return <PulseLoader color="#FFF" loading={loading} size={5} />;
  }

  return (
    <div className="ss-container">
      {sections.map(({ name }, index) => (
        <div className="ss-section" onClick={() => onChange(index)}> 
          <div className="ss-header">
            {name}
            <FontAwesomePro
              icon={selected === index ? 'check-circle' : 'circle'}
              color="#FFF"
            />
          </div>
          <div className="ss-body">
            <div className="ss-task" />
          </div>
        </div>
      ))}
    </div>
  );
}