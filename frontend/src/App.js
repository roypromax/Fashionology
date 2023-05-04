import "./App.css";
import { Navbar } from "./components/Navbar";
import logo from './logo.svg';
import { Home } from './pages/Home';
import { Footer } from './components/Footer';

function App() {
  return (
    <div className="App">
      <Navbar />
      <Home/>
      <Footer/>
    </div>
  );
}

export default App;
