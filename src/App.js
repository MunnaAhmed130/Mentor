import { BrowserRouter, Routes, Route } from "react-router-dom";
import './App.css';
import AboutUs from "./Components/AboutUs/AboutUs";
import AddOrder from "./Components/AddOrder/AddOrder";
import Login from "./Components/Authentication/Login/Login";
import Register from "./Components/Authentication/Register/Register";
import Home from "./Components/Home/Home/Home";
import PrivateRoute from "./Components/PrivateRoute/PrivateRoute";
import Courses from "./Components/Services/Courses/Courses";
import AuthProvider from "./Context/AuthProvider";
import Footer from "./SharedComponents/Footer/Footer";
import Header from "./SharedComponents/Header/Header";

function App() {
  return (
    <AuthProvider>
      <div className="App">
        <BrowserRouter>
          <Header></Header>
        <Routes>
          <Route exact path="/" element={<Home />} />
          <Route path="/home" element={<Home />} />
            <Route path="/courses" element={<PrivateRoute><Courses /></PrivateRoute>} />
            <Route path="/aboutUs" element={<AboutUs />} />
            <Route path="/login" element={<Login />} />
            <Route path="/register" element={<Register />} />
            <Route path="/addOrder" element={<AddOrder />} />

            <Route path="/addOrder/:id" element={<PrivateRoute><AddOrder /></PrivateRoute>} />
          </Routes>
          <Footer />
        </BrowserRouter>

      </div>
    </AuthProvider>
  );
}

export default App;
