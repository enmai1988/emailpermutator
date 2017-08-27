import React from 'react';

const Result = ({ result }) => (
  <ul style={{listStyle: 'none'}}>
    {result.map((el, i) => <li key={i}>{el}</li>)}
  </ul>
);

export default Result;