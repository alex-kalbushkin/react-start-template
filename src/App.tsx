import React, { Suspense } from 'react';
import { Navigation } from './components/Navigation';
import './App.css';
import { LocalizationCreator } from './localization';
import './localization/settings';
import { ThemeProvider, TokenProvider } from './providers';

function App() {
  return (
    <div className="App">
      <Suspense fallback="Loading...">
        <ThemeProvider>
          <LocalizationCreator />
          <TokenProvider>
            <Navigation />
          </TokenProvider>
        </ThemeProvider>
      </Suspense>
    </div>
  );
}

export default App;
