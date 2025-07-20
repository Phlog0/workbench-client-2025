import "./App.css";
import { Toaster } from "shared/ui";
import { AppRouter } from "./AppRouter";

function App() {
  return (
    <div>
      {/* <div className="w-40"> */}
      <AppRouter />

      <Toaster />
    </div>
  );
}

export default App;
