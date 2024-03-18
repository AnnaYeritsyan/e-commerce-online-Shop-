import { Route, Routes, Navigate, BrowserRouter } from 'react-router-dom';
import Layout from './Components/Layout';
import './App.css';
import HomePage from './Components/Pages/home';
import Products from './Components/Pages/Products/Products';
import ProductsDetail from './Components/Pages/Products/ProductsDetail/ProductsDetail';
import Cart from './Components/Cart/Cart';
import { useEffect, useState } from 'react';
import Orders from './Components/Pages/Orders/Orders';
import LoginPage from './Components/SignIn/Login/Login';
import Registration from './Components/SignIn/Registration/Registration';
import Admin from './Components/Pages/Admin/Admin';
import Profile from './Components/Pages/Profile/Profile';

function App() {
  const [cart, setCart] = useState<string[]>([]);
  const [order, setOrder] = useState<string[]>([])

  const addToCart = (product:any) => {
      setCart([...cart, product]);
  };
  const addToOrder = (product:any)=>{
    setOrder([...order, product]);
  }

  const removeFromCart = (productId:any) => {  
    const updatedCart = cart.filter((item: any) => item.id != productId.id     );
    setCart(updatedCart);
    // console.log(updatedCart)
};

  let getuserName =localStorage.getItem("token");
  
  return (
    <BrowserRouter>
    <Routes>
    <Route element={<Layout />}>
      <Route path='/' element={<HomePage />} />
      <Route path='products'>
        <Route index element={<Products addToCart={addToCart} />} />
        <Route path=':id' element={<ProductsDetail  addToCart={addToCart} />} />
        </Route>
        <Route path='/cart' element={<Cart product={cart} addToOrder={addToOrder} removeFromCart={removeFromCart}/>} />
        <Route path='/orders' element={<Orders order= {order}/>} />
        {
          getuserName==='Admin'? <Route path='/admin' element={<Admin/>} />:null
        }
        <Route path='/profile' element={<Profile/>} />
    </Route> 

    <Route path='/login' element={<LoginPage />} />
    <Route path='/register' element={<Registration/>} />
    <Route path='*' element={<Navigate to='/' />} />
  </Routes>
  </BrowserRouter>
  );
}

export default App;
