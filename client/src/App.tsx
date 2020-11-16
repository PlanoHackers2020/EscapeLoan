import { Container, Typography } from '@material-ui/core';
import React from 'react';
import './App.css';
import RequestStepper from './components/RequestStepper';

function App() {
  return (
    <div className="App">
      <Container maxWidth="lg">
        <Typography variant="h1">Loan Escape</Typography>
        <RequestStepper />
      </Container>
    </div>
  );
}

export default App;
