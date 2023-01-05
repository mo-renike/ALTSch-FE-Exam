import React from "react";
import "./App.css";
import { Route, Routes } from "react-router-dom";
import Navbar from "./Components/Navbar/Navbar";
import NotFound from "./Components/NotFound/NotFound";
import Details from "./Pages/Details/Details";
import Repos from "./Pages/Repos/Repos";
import { ErrorBoundary } from "react-error-boundary";
import { ErrorFallback } from "./Components/ErrorBoundary/ErrorFallback";
import { HelmetProvider } from "react-helmet-async";

function Bomb() {
  throw new Error("💥 KABOOM 💥");
}
const App = () => {
  const [explode, setExplode] = React.useState(false);
  return (
    <HelmetProvider>
      <Navbar setExplode={setExplode} />
      <ErrorBoundary
        FallbackComponent={ErrorFallback}
        onReset={() => setExplode(false)}
        resetKeys={[explode]}
      >
        {explode ? <Bomb /> : null}
        <div className="App">
          <Routes>
            <Route path="/" element={<Repos />} />
            <Route path="/:username/:repo" element={<Details />} />
            <Route path="*" element={<NotFound />} />
          </Routes>
        </div>
      </ErrorBoundary>
    </HelmetProvider>
  );
};

export default App;
