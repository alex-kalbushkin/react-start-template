import React, { Suspense } from 'react';
import { Navigation } from './components/Navigation';
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
          <Navigation />
        </ThemeProvider>
      </Suspense>
    </div>
  );
}

export default App;
