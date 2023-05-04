import "./App.css";
import { Navbar } from "./components/Navbar";
import logo from './logo.svg';
import { Home } from './pages/Home';

function App() {
  return (
    <div className="App">
      <Navbar />
      <Home/>
    </div>
  );
}

export default App;
