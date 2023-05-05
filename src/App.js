import './App.css';
import Home from './pages/Home';
import Contributors from './pages/Contributors';
import Entire from './pages/Entire';
import { BrowserRouter, Route, Routes, useLocation } from "react-router-dom";


function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/contributors" element={<Contributors />} />
          <Route path="/entire" element={<Entire />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
