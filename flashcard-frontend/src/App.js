import React from 'react';
import { Container } from '@material-ui/core';

import HomePage from './pages/HomePage';
import './App.css';

function App() {
  return (
    <Container className="App" maxWidth="sm">
      <HomePage name="Hiruna Jayamanne" courses={["SOFTENG211"]} />
    </Container>
  );
}


export default App;
