import React from 'react';
import Nav from './components/Nav';
import Routes from './components/Routes';

function App() {
  return (
    <div data-testid="app" className="App">
      <header className="App-header">
        <Nav />
      </header>
      <main>
        <Routes />
      </main>
    </div>
  );
}

export default App;
