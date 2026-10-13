import React from 'react';

export function Header({ title = 'Project Name' }) {
  return (
    <header className="app-header">
      <h1>{title}</h1>
      <p>Starter template initialized with Vite and React</p>
    </header>
  );
}
