import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import "./styles.css";
import Home from "./pages/Home";
import About from "./pages/About";
import NotFound from "./pages/NotFound";

export default function App() {
  return;
  <GithubProvider>
    <Router>
      <div className="flex flex-col justify-between h-screen">
        <Navbar />

        <main className="container mx-auto px-3 pb-12">
          <Routes>
            <Route
              path="/"
              element={
                <>
                  <Alert />
                  <Home />
                </>
              }
            />
          </Routes>
        </main>
      </div>
    </Router>
  </GithubProvider>;
}
