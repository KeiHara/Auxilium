import './App.css';
import './index.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import { AuthProvider } from "../src/contexts/AuthContext";
import { useAuth } from "../src/contexts/AuthContext"
import DisplayPage from "../src/components/DisplayPage";
import Login from "../src/components/Login/Login";
import SignUp from "../src/components/SignUp/SignUp";
import NavBarSide from "./components/NavBarSide";
import NavBarTop from "../src/components/NavBarTop";
import ProfilePage from "../src/components/profile";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom"

function App() {
  
  var isLoggedIn = true;

  if (isLoggedIn === false) {
    document.querySelector("body").style.backgroundColor = "#333533";
  } else {
    document.querySelector("body").style.backgroundColor = "#1b9aaa";
  };



  return (
    <AuthProvider> {
      isLoggedIn === false ?
          <div>
              <div style={{width: "20%", marginLeft: "0", float: "left"}}>
                  <NavBarSide/>
              </div>
              <div style={{width: "80%", float: "right"}}>
                  <NavBarTop/>
              </div>
              <div style={{width: "80%", float: "right"}}>
                  <ProfilePage />
              </div>
          </div>

      :
      <Router>
          <Switch>
              <Route path="/login">
                  <Login />
              </Route>
              <Route path="/signup">
                  <SignUp />
              </Route>
              <Route path="/">
                  <DisplayPage isLoggedIn={{isLoggedIn}} />
              </Route>
          </Switch>


      </Router>
    } </AuthProvider>
  );
}

export default App;
