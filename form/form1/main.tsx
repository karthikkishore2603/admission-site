import React from "react";
import ReactDOM from "react-dom/client";
import  Form1  from "./form1"; 

import { QueryClient, QueryClientProvider } from "@tanstack/react-query";

const queryClient = new QueryClient();

ReactDOM.createRoot(document.getElementById("form1")!).render(
    <React.StrictMode>
        <QueryClientProvider client={queryClient}>
            <Form1 />
        </QueryClientProvider>
    </React.StrictMode>
);
