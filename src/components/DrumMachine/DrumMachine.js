'use client';
import React from 'react';
import useSound from 'use-sound';
import { SoundEnabledContext } from '../../app/layout';
import styles from './DrumMachine.module.css';

const SOUND_SRC = '/909-drums.mp3';

function DrumMachine() {
  const { isSoundEnabled } = React.useContext(SoundEnabledContext);
  const [play] = useSound(SOUND_SRC, {
    sprite: {
      kick: [0, 350],
      hihat: [374, 160],
      snare: [666, 290],
      cowbell: [968, 200],
    },
    soundEnabled: isSoundEnabled,
  });

  return (
    <div className={styles.wrapper}>
      <button onClick={() => play({ id: 'kick' })}>Kick</button>
      <button onClick={() => play({ id: 'hihat' })}>Hat</button>
      <button onClick={() => play({ id: 'snare' })}>Snare</button>
      <button onClick={() => play({ id: 'cowbell' })}>Cowbell</button>
    </div>
  );
}

export default DrumMachine;
