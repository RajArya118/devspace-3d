import React from 'react';
import reactLogo from '../assets/react.svg';
import { Header } from '../components/Header';
import { useCounter } from '../hooks/useCounter';
import { features } from '../data/sampleData';

export function Home() {
  const { count, increment, decrement, reset } = useCounter(0);

  return (
    <div className="home-page">
      <div className="logo-container">
        <a href="https://vite.dev" target="_blank" rel="noreferrer">
          <img src="/vite.svg" className="logo" alt="Vite logo" />
        </a>
        <a href="https://react.dev" target="_blank" rel="noreferrer">
          <img src={reactLogo} className="logo react" alt="React logo" />
        </a>
      </div>

      <Header title="Welcome to project-name" />

      <div className="card">
        <h2>Counter Hook Demo</h2>
        <p>Current count: <strong>{count}</strong></p>
        <div style={{ display: 'flex', gap: '0.5rem', justifyContent: 'center' }}>
          <button onClick={decrement}>-</button>
          <button onClick={increment}>+</button>
          <button onClick={reset}>Reset</button>
        </div>
      </div>

      <div className="card" style={{ marginTop: '1.5rem' }}>
        <h3>Included Structure Features</h3>
        <ul className="data-list">
          {features.map((feature) => (
            <li key={feature.id} className="data-item">
              <strong>{feature.title}</strong>: {feature.description}
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}
