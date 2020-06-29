import React from 'react';
import FontAwesomePro from '../FontAwesomePro';
import { PulseLoader } from "react-spinners";
import theme from '../../styles/theme';
import './styles.css';
import Scroller from '../Scroller';

export default function SectionsSelect({ sections, selected, onChange, loading }) {
  if (loading) return (
    <div className="ss-loading-container">
      <PulseLoader color={theme.colors.primary} loading={loading} size={10} />
    </div>
  );

  return (
    <Scroller>
      {sections.map(({ name, gid }, index) => {
        const isSelected = selected === index;
        return (
          <div
            key={gid}
            className={`ss-section ${isSelected ? 'ss-section-selected' : ''}`}
            onClick={() => onChange(index)}
          > 
            <div className="ss-header">
              <p className="ss-title">{name}</p>
              <FontAwesomePro
                icon={isSelected ? 'check-circle' : 'circle'}
                className={isSelected ? 'ss-section-icon-selected' : 'ss-section-icon'}
              />
            </div>
            <div className="ss-body">
              <div className="ss-task" />
            </div>
          </div>
        );
      })}
    </Scroller>
  );
}