import 'bulmaswatch/superhero/bulmaswatch.min.css';
import '@fortawesome/fontawesome-free/css/all.min.css';
import '../src/index.css';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { store } from './state';
import CellList from './components/cell-list';
import Navigation from './pages/navigation';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import React, { useState } from 'react';
import Home from './pages/Home';
import About from './pages/About';
import CodeCell from './components/code-cell';
import Login from './pages/Login';
import Register from './pages/Register';
import 'bootstrap/dist/css/bootstrap.min.css';
import LogoutButton from './components/log-out-button';



const App = () => {
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  const handleLogin = (value:boolean) => {
    
    setIsLoggedIn(value);
  };

  const handleRegister = (username: any, password: any) => {
    
    setIsLoggedIn(true);
  };


  
  return (
    <Provider store={store}>
      <BrowserRouter>

      <Navigation onLogOut={handleLogin} isLoggedIn={isLoggedIn}/>

      <Routes>
          <Route path="/" element={<Home />} />
          <Route path="about" element={<About />} />
          <Route path="codecell" element={<CellList />} />
          <Route
          path="/login"
          element={
           <Login loginStatus={isLoggedIn} onLogin={handleLogin} />
          }
        />
       
        <Route path="/register" element={<Register onRegister={handleRegister} />} />
        </Routes>

       

      </BrowserRouter>
     
      
      
    </Provider>
  );
};

ReactDOM.render(<App />, document.querySelector('#root'));
