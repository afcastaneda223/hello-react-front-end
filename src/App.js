import React from 'react';
import {
  BrowserRouter,
} from 'react-router-dom';
import Greeting from './components/Greeting';

function App() {
  return (
    <>
      <BrowserRouter>
        <Greeting />
      </BrowserRouter>
    </>
  );
}

export default App;
