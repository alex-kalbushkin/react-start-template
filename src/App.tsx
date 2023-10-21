import React from 'react';
import { Layout } from './components/Layout';
import './App.css';
import { LocalizationProvider, ThemeProvider } from './providers';

function App() {
  return (
    <div className="App">
      <LocalizationProvider>
        <ThemeProvider>
          <Layout />
        </ThemeProvider>
      </LocalizationProvider>
    </div>
  );
}

export default App;
