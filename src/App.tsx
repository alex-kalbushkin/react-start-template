import React from 'react';
import { Layout } from './components/Layout';
import './App.css';
import { ThemeProvider } from './providers';

function App() {
  return (
    <div className="App">
      <ThemeProvider>
        <Layout />
      </ThemeProvider>
    </div>
  );
}

export default App;
