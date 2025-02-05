import "./App.css";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
  Toaster,
} from "shared/ui";
import { AppRouter } from "./AppRouter";
function App() {
  return (
    <div className="w-40">
      <AppRouter />
      <Toaster />
    </div>
  );
}

export default App;
