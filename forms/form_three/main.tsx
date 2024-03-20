import React from 'react'
import ReactDOM from 'react-dom/client'
import Formthree from './form_three.tsx'


import { QueryClient, QueryClientProvider } from "@tanstack/react-query";


const queryClient = new QueryClient();

ReactDOM.createRoot(document.getElementById('formone')!).render(
  <React.StrictMode>
    <QueryClientProvider client={queryClient}>
    <Formthree />
    </QueryClientProvider>
  </React.StrictMode>,
)



