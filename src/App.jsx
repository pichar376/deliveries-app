import { ThemeProvider } from "@mui/material";
import "./App.css";
import theme from "./globalThem";
import Delivery from "./pages/deli/Delivery";

function App() {
  return (
    <div className="App">
      <Delivery />
    </div>
  );
}

export default App;
