import { BrowserRouter, Routes, Route, Link } from "react-router-dom";
import './App.css';
import Home from "./Components/Home/Home/Home";
import Services from "./Components/Services/Services";

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route exact path="/" element={<Home />} />
          <Route path="/home" element={<Home />} />
          <Route path="/courses" element={<Services />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
