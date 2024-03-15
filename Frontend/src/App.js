// App.js
import React from 'react';
import Main from './main';
import { LoginProvider } from './Context/LoginContext';
import ProfilePage from './Components/myProfile';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

function App() {

  return (
    <div className="App">
      <Router>
      <LoginProvider>
        <Main />
      </LoginProvider>
      </Router>
    </div>
  );
}

export default App;
