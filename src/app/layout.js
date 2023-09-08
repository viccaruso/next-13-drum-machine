'use client';
import React from 'react';

import Header from '../components/Header';

import './styles.css';
export const SoundEnabledContext = React.createContext();

function RootLayout({ children }) {
  const [isSoundEnabled, setIsSoundEnabled] = React.useState(true);
  const value = { isSoundEnabled, setIsSoundEnabled };
  return (
    <html lang="en">
      <body>
        <SoundEnabledContext.Provider value={value}>
          <Header />
          {children}
        </SoundEnabledContext.Provider>
        <footer>
          <img src="/ie-badge.gif" width={100} />
          <span>Thanks for visiting!</span>
        </footer>
      </body>
    </html>
  );
}

export default RootLayout;
