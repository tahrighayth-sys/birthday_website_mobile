import React from 'react';
import Home from './components/Home';
import Card from './components/Card';

function App() {
  return (
    <div className="App">
      <Home />
      <div style={{padding: '20px'}}>
        <Card />
      </div>
    </div>
  );
}

export default App;
