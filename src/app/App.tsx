import "./App.css";
import { Toaster, TooltipProvider } from "shared/ui";
import { AppRouter } from "./AppRouter";

function App() {
  return (
    <div>
      {/* <div className="w-40"> */}
      <TooltipProvider>
        <AppRouter />

        <Toaster />
      </TooltipProvider>
    </div>
  );
}

export default App;
