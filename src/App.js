import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import "./styles.css";
import Home from "./pages/Home";
import About from "./pages/About";
import NotFound from "./pages/NotFound";

export default function App() {
  return (
    <div className="App">
      <Home />
    </div>
  );
}
