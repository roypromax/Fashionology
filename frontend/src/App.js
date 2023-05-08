import './App.css';

import { Home } from './pages/Home';
import { Footer } from './components/Footer';
import { Productpage } from './pages/Productpage';
import { Allroutes } from './pages/Allroutes';
import ProductAdminList from './components/AdminProduct/ProductAdminList';

function App() {
  return (
    <div className="App">
    {/* <ProductAdminList/> */}
      <Allroutes/>
    </div>
  );
}

export default App;
