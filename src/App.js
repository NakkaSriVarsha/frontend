import logo from './logo.svg';
import './App.css';
import { BrowserRouter,Router,Link,Routes,Route } from 'react-router-dom';
import Invoices from './components/Invoices';
import Home from './components/Home';
function App() {
  return (
    <div className="App">
      {/* Routing the components */}
      <BrowserRouter>
        <Routes>
          <Route path='/' element={<Home/>}/>
          <Route path="/invoices" element={<Invoices/>}/>
        </Routes>
      </BrowserRouter>
      <Home/>
    </div>
  );
}

export default App;
