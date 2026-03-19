import { createRoot } from "react-dom/client";
import { BrowserRouter } from "react-router-dom";
import "@/index.css";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import App from "@/App.tsx";

const queryClient = new QueryClient();

const rootElement = document.getElementById("root");

if (rootElement) {
  createRoot(rootElement).render(
    <BrowserRouter>
      <QueryClientProvider client={queryClient}>
        <App />
      </QueryClientProvider>
    </BrowserRouter>,
  );
} else {
  console.error("Failed to find the root element");
}
