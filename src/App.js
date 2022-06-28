import { BrowserRouter,Routes,Route } from 'react-router-dom';
import './App.css';
import Home from './Home';
import Order from "./Order"


function App({Store}) {
  return (
    <div >
<BrowserRouter>
<Routes>
  <Route path="/" element={<Home Store={Store} />}/>
  <Route path="/orders" element={<Order Store={Store} />}/>
</Routes>
</BrowserRouter>
<footer className='text-center text-success'>Designed and developed by | Laxman D H</footer>
    </div>
  );
}

export default App;
