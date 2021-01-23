import React, {useState} from 'react';
import './App.css';
import './Header';
import Home from './Home';
import Header from './Header';
import Footer from './Footer';
import SearchPage from './SearchPage';

/*import  './giftspage';
import  giftResult from '/giftResult';*/


import Header2 from './components/Header/Header2';
import LoginForm from './components/LoginForm/LoginForm';
import RegistrationForm from './components/RegistrationForm/RegistrationForm';
import Home2 from './components/Home/Home2';
import AlertComponent from './components/AlertComponent/AlertComponent';  






import {BrowserRouter as Router,Switch, Route, Link,NavLink} from "react-router-dom";
import giftspage from './giftspage';

function App() {


  const [title, updateTitle] = useState(null);
  const [errorMessage, updateErrorMessage] = useState(null);



  return (
    <div className="App">
      
      <Router>
        
    <Header/>
    <Switch>
    <Route path="/search">
      
    <SearchPage/>
      </Route>

      
    
    
    <Route path="/">
      <Home />
    </Route>

    {/* <Route path="/giftspage">
      <giftspage />
    </Route> */}

    </Switch>
    
    <Footer />
    </Router>
    <Router>
    <div className="App">
      <Header title={title}/>
        <div className="container d-flex align-items-center flex-column">
          <Switch>
            <Route path="/" exact={true}>
              <RegistrationForm showError={updateErrorMessage} updateTitle={updateTitle}/>
            </Route>
            <Route path="/register">
              <RegistrationForm showError={updateErrorMessage} updateTitle={updateTitle}/>
            </Route>
            <Route path="/login">
              <LoginForm showError={updateErrorMessage} updateTitle={updateTitle}/>
            </Route>
            <Route path="/home">
              <Home/>
            </Route>
          </Switch>
          <AlertComponent errorMessage={errorMessage} hideError={updateErrorMessage}/>
        </div>
    </div>
    </Router>
    </div>
  );
}

export default App;
