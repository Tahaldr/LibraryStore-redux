import { Routes, Route } from "react-router-dom";
import Home from "./Home";
import DetailsLivres from "./DetailsLivres";

function App() {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/details-livre" element={<DetailsLivres />} />
    </Routes>
  );
}

export default App;
