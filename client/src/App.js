import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import NavbarComp from '../src/components/NavbarComp'
import { AuthProvider } from "../src/contexts/AuthContext"


function App() {

  return (
    <AuthProvider>
      <div className="App">
        <NavbarComp />
      </div>
    </AuthProvider>
  );
}

export default App;
