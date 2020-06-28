import React from 'react';

export function H2({ style, children }) {
  return (
    <h2 style={{
      fontFamily: 'CircularStd-Bold',
      color: 'white',
      ...style,
    }}>{children}</h2>
  )
}

export function Description({ style, children }) {
  return (
    <p style={{
      fontFamily: 'CircularStd-Book',
      color: '#737579',
      ...style,
    }}>{children}</p>
  )
}