import React, { Suspense } from 'react';
import { HashRouter } from 'react-router-dom';
import { Navigation } from './components/Navigation';
import './App.css';
import { LocalizationCreator } from './localization';
import './localization/settings';
import { ThemeProvider, TokenProvider } from './providers';

function App() {
  return (
    <HashRouter basename="/react-start-template">
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
    </HashRouter>
  );
}

export default App;
