
import './App.css';
import Login from './components/Login';
import Home from './components/Home';
import {Route,Routes } from 'react-router-dom';
import Add from './components/Add';
import Getproducts from './components/Getproducts';
import Edit from './components/Edit';
import Signup from './components/Signup';
import Cart from './components/Cart';
import Checkout from './components/Ckeckout';
import StripeCheckout from 'react-stripe-checkout';
import Logout from './components/Logout';

function App() {
  return (
    <div className="App">
      <Routes>
      <Route exact path='' element={<Login/>}></Route>
      <Route exact path='/login' element={<Login/>}></Route>
      <Route exact path='home' element={<Home/>}></Route>
      <Route exact path='add' element={<Add/>}></Route>
      <Route exact path='/products' element={<Getproducts/>}></Route>
      <Route exact path='getproduct/:id' element={<Edit/>}></Route>
      <Route exact path='/signup' element={<Signup/>}></Route>
      <Route exact path='getcart' element={<Cart/>}></Route>
      <Route exact path='/checkout' element={<Checkout/>}></Route>
      <Route exact path='/logout' element={<Logout/>}></Route>
      </Routes>
     
        

    </div>
  );
}

export default App;
