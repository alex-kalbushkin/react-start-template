import React, { Suspense } from 'react';
import { Layout } from './components/Layout';
import './App.css';
import { LocalizationCreator } from './localization';
import './localization/settings';
import { ThemeProvider } from './providers';

function App() {
  return (
    <div className="App">
      <Suspense fallback="Loading...">
        <LocalizationCreator />
        <ThemeProvider>
          <Layout />
        </ThemeProvider>
      </Suspense>
    </div>
  );
}

export default App;
