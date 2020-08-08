import React from 'react';
import { Container } from '@material-ui/core';
import { BrowserRouter, Route } from 'react-router-dom';

import HomePage from './pages/HomePage';
import './App.css';

function App() {
  return (
    <Container className="App" maxWidth="sm">
      <BrowserRouter>
        <Route path="/">
          <HomePage name="Hiruna Jayamanne" courses={["SOFTENG211"]} />
        </Route>
      </BrowserRouter>
    </Container>
  );
}


export default App;
