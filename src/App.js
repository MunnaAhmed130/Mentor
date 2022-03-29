import { BrowserRouter, Routes, Route } from "react-router-dom";
import './App.css';
import Home from "./Components/Home/Home/Home";
import Services from "./Components/Services/Services";
import AuthProvider from "./Context/AuthProvider";

function App() {
  return (
    <AuthProvider>
      <div className="App">
      <BrowserRouter>
        <Routes>
          <Route exact path="/" element={<Home />} />
          <Route path="/home" element={<Home />} />
          <Route path="/courses" element={<Services />} />
        </Routes>
      </BrowserRouter>
      </div>
    </AuthProvider>
  );
}

export default App;
