import './App.css';
import './index.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import NavbarComp from '../src/components/NavbarComp';
import { AuthProvider } from "../src/contexts/AuthContext";
import DisplayPage from "../src/components/DisplayPage";
import Login from "../src/components/Login/Login";
import SignUp from "../src/components/SignUp/SignUp";
import NavBarSide from "./components/NavBarSide";
import NavBarTop from "../src/components/NavBarTop";
import { BrowserRouter as Router, Switch, Route, Link, useHistory } from "react-router-dom"
import { left } from '@popperjs/core';


var isLoggedIn = false;

if (isLoggedIn === false) {
  document.querySelector("body").style.backgroundColor = "#333533";
} else {
  document.querySelector("body").style.backgroundColor = "1b9aaa";
};

function App() {

  return (
    <AuthProvider> {
      isLoggedIn === false ?
          <div>
              <div style={{width: "20%", marginLeft: "0", backgroundColor: "Red", float: "left"}}>
                  <NavBarSide/>
              </div>
              <div style={{backgroundColor: "Blue"}}>
                  <NavBarTop/>
              </div>
          </div>

      :
      <Router>
          <Switch>
              <Route path="/login">
                  <Login/>
              </Route>
              <Route path="/signup">
                  <SignUp/>
              </Route>
              <Route exact path="/">
                  <DisplayPage/>
              </Route>
          </Switch>


      </Router>
    } </AuthProvider>
  );
}

export default App;
