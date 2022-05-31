import Navbar from './components/Navbar';
import './App.css';
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import ProductDetails from './components/ProductDetails';
import Home from './components/Home';
import AddedproductsCarts from './components/AddedproductsCarts';
import React, { useReducer, createContext, useState,useEffect } from 'react';
import data from "./components/data.json"
import { reducer } from './components/reducer';

const CartDetail = createContext()
function App() {
  const [totalValue, setTotalValue] = useState();
  const [cartValue, setCartValue] = useState();
  const initialState = {
    item: data,
    totalAmount: 0,
    totalItem: 0,
  };
  
  const [state, dispatch] = useReducer(reducer, initialState);


  const increment = (id) => {
    dispatch({
      type: "INCREMENT",
      payload: id
    });

  };
  const decrement = (id) => {
    dispatch({ 
      type: "DECREMENT", 
      payload: id 
    });
  };

  const applyPromoCode1 = (discount)=>{
    dispatch({ 
      type: "RRD4D32", 
      payload: discount 
    });
    
}
const applyPromoCode2 = (discount)=>{
  dispatch({ 
    type: "RRD4D32", 
    payload: discount 
  });
  
}

  useEffect(() => {
    dispatch({ type: "GET_TOTAL" });
  }, [state.item]);

  return (
    <div className="App">
      <CartDetail.Provider value={{ ...state, increment, decrement,applyPromoCode1,applyPromoCode2 }} >
        <Router>
          <Navbar />
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/product-details" element={<ProductDetails />} />
            <Route path="/products-cart" element={<AddedproductsCarts />} />
          </Routes>
        </Router>
      </CartDetail.Provider>
    </div>
  );
}

export default App;
export { CartDetail };
