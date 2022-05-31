import App from './App';

import {StrictMode} from 'react';
import {createRoot} from 'react-dom/client';
import './styles/global.css'
const rootElement = document.getElementById('root');

// ⛔️ Argument of type 'HTMLElement | null' is not
// assignable to parameter of type 'Element | DocumentFragment'.
// Type 'null' is not assignable to type 'Element | DocumentFragment'.ts(2345)
const root = createRoot(rootElement!);

root.render(
  <StrictMode>
    <App />
  </StrictMode>,
);
