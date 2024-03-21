import React from 'react'
import ReactDOM from 'react-dom/client'
// import App from './App.tsx'
import Form from './form.tsx'

import { QueryClient, QueryClientProvider } from "@tanstack/react-query";

const queryClient = new QueryClient();

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <QueryClientProvider client={queryClient}>
    <Form />
    </QueryClientProvider>
      </React.StrictMode>,
)
