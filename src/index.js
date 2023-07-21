import React from 'react';
import { createRoot } from 'react-dom/client';
import App from './App';
import { store } from './store';
import { Provider } from 'react-redux';
import { SessionContextProvider } from '@supabase/auth-helpers-react';
import { supabase } from './supabaseClient';

const el = document.getElementById('root');
const root = createRoot(el);

root.render(
  <SessionContextProvider supabaseClient={supabase}>
    <Provider store={store}>
      <App />
    </Provider>
  </SessionContextProvider>
);
