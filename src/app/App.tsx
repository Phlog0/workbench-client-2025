// import "./App.css";
import { Toaster, TooltipProvider } from "shared/ui";
import { AppRouter } from "./AppRouter";
import { QueryClientProvider } from "@tanstack/react-query";
import { queryClient } from "@/shared/api";

function App() {
  return (
    <QueryClientProvider client={queryClient}>
      <TooltipProvider>
        <AppRouter />
        <Toaster />
      </TooltipProvider>
    </QueryClientProvider>
  );
}

export default App;
