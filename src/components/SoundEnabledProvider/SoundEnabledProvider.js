'use client';
import React from 'react';

const SoundEnabledContext = React.createContext();

function SoundEnabledProvider({ children }) {
  const [isSoundEnabled, setIsSoundEnabled] = React.useState(true);

  return (
    <SoundEnabledContext.Provider value={{ isSoundEnabled, setIsSoundEnabled }}>
      {children}
    </SoundEnabledContext.Provider>
  );
}

export function useSoundEnabled() {
  const data = React.useContext(SoundEnabledContext);

  if (!data) {
    throw new Error(
      'Cannot consume SoundEnabled context without a SoundEnabledProvider'
    );
  }

  return data;
}

export default SoundEnabledProvider;
