import React from 'react'
import ReactDOM from 'react-dom/client'
import Formone from './form_one.tsx'


import { QueryClient, QueryClientProvider } from "@tanstack/react-query";


const queryClient = new QueryClient();

ReactDOM.createRoot(document.getElementById('formone')!).render(
  <React.StrictMode>
    <QueryClientProvider client={queryClient}>
    <Formone />
    </QueryClientProvider>
  </React.StrictMode>,
)



