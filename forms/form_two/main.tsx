import React from 'react'
import ReactDOM from 'react-dom/client'
import Formone from './form_two.tsx'


import { QueryClient, QueryClientProvider } from "@tanstack/react-query";


const queryClient = new QueryClient();

ReactDOM.createRoot(document.getElementById('formtwo')!).render(
  <React.StrictMode>
    <QueryClientProvider client={queryClient}>
    <Formone />
    </QueryClientProvider>
  </React.StrictMode>,
)



