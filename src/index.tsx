import React, { StrictMode } from 'react';
import ReactDOM from 'react-dom/client';
import './styles.css';
import { Provider as ReduxProvider } from 'react-redux';
import { store } from './store';
import App from './App';

const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement
);

root.render(
  <StrictMode>
    <ReduxProvider store={store}>
      <App />
    </ReduxProvider>
  </StrictMode>
);
