import "./App.css";
import Home from "./Components/Home";
import About from "./Components/About";
import Contact from "./Components/Contact";
import Footer from "./Components/Footer";
import Diet from "./Components/Diet";
import Login from "./Components/login/login";
import Register from "./Components/register/register";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { useState } from 'react';
import { Toaster } from 'react-hot-toast';
import Recpie from "./Components/RecipieCards/Recipie";


function App() {
  const [user, setLoginUser] = useState("");

  return (
    <div className="App">
      <Router>
        <Toaster />
        <Routes>
          <Route
            path="/"
            element={user ? <Diet /> : <Login setLoginUser={setLoginUser} />}
          />
          <Route path="/Diet" element={<Login setLoginUser={setLoginUser} />} />
          <Route path="/login" element={<Login setLoginUser={setLoginUser} />} />
          <Route path="/register" element={<Register setLoginUser={setLoginUser} />} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;