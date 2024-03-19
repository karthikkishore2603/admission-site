import React from "react";
import ReactDOM from "react-dom/client";
import  Form2  from "./Form2"; 

import { QueryClient, QueryClientProvider } from "@tanstack/react-query";

const queryClient = new QueryClient();

ReactDOM.createRoot(document.getElementById("form2")!).render(
    <React.StrictMode>
        <QueryClientProvider client={queryClient}>
            <Form2 />
        </QueryClientProvider>
    </React.StrictMode>
);
