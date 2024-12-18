import Home from './pages/Home';
import './App.css';
import Footer from './components/Footer';
import Header from './components/Headers';
import {BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import {ToastContainer} from 'react-toastify';
import ProductDetail from './pages/ProductDetail';
import 'react-toastify/dist/ReactToastify.css';
import { useState } from 'react';
import Cart from './pages/Cart';

function App() {
  const [cartItems,setCartItems] = useState([]);
  return (
    <div className="App">
      <Router>
        <div>
           <ToastContainer theme='dark' position='top-center' /> 
          <Header 
            cartItems={cartItems}
          />
          <Routes>
            <Route path='/' element={<Home />} />
            <Route path='/search' element={<Home />} />
            <Route path='/product/:id' element={<ProductDetail cartItems = {cartItems} setCartItems ={setCartItems} />} />
            <Route path="/cart" element = {<Cart cartItems={cartItems} setCartItems={setCartItems} />} />
          </Routes>
          <Footer />
        </div>
      </Router>
    </div>
  );
}

export default App;
