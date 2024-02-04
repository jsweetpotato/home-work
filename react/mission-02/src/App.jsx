import { useState } from 'react';
import { data } from '../data';
import { Card } from './components/Card';

function App() {
  return (
    <>
      <Card {...data[0]} />
    </>
  );
}

export default App;
