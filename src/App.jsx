import { Route, Routes } from "react-router-dom";
import "./assets/styles/Main.css";
import Build from "./components/build/BuildIndex";

function App() {
  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<Build />} />
      </Routes>
    </div>
  );
}

export default App;
