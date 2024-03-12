import "./App.css";
import Home from "./elements/home";
import About from "./elements/about";
import Contact from "./elements/contact";
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
            element={<Home />}
          />
          <Route
            path="/user"
            element={user ? <Recpie /> : <Login setLoginUser={setLoginUser} />}
          />
          <Route
            path="/diet"
            element={user ? <Recpie /> : <Login setLoginUser={setLoginUser} />}
          />
          <Route
            path="/home"
            element={<Home />}
          />
          <Route
            path="/contact"
            element={<Contact />}
          />
          <Route
            path="/about"
            element={<About />}
          />
          <Route path="/login" element={<Login setLoginUser={setLoginUser} />} />
          <Route path="/register" element={<Register setLoginUser={setLoginUser} />} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;