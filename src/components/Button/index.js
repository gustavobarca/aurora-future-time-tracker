import React from 'react';
import './styles.css';
import theme from '../../styles/theme';

export default function Button({ children, onClick, fullWidth, style }) {
  return (
    <button
      style={{
        backgroundColor: theme.colors.primary,
        width: fullWidth ? '100%' : 'auto',
        ...style,
      }}
      onClick={onClick}
      className="button"
    >
      {children}
    </button>
  );
}