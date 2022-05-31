import React, { useContext, useEffect, useState } from 'react';
import { CartDetail } from '../App';
import data from "./data.json";
import Items from './Items';

const Home = () => {
    const[totalValue, setTotalValue] = useState()
    console.log(data)
  let { item, totalAmount } = useContext(CartDetail);
console.log(totalAmount)
  
useEffect(()=>{
    setTotalValue(totalAmount)
},[totalAmount])

const applyPromoCode1 =(payload)=>{
    if(totalAmount>5000){
        setTotalValue(payload)
    }  
}
const applyPromoCode2 =(payload)=>{
    if(totalAmount>10000){
        setTotalValue(payload)
    }  
}
//   const { removeItem, increment, decrement } = useContext(CartDetail);
//   const context = useContext(CartDetail);
  return (
    <div className='mainContainer'>
        <h1>My products</h1>
        <div className="total_products">
        {
            item.map((curItem)=>{
                return   <Items key={curItem.id} {...curItem} />
            })
        }
        </div>
        <div className="total_amount">
        <h4>Total amount {totalValue.toFixed(2)}</h4>
            <button onClick={()=>applyPromoCode1(totalAmount-(totalAmount*10/100))} >Apply promo code RRD4D32</button>
            <button onClick={()=>applyPromoCode2(totalAmount-(totalAmount*15/100))} >Apply promo code 44F4T11</button>
        </div>
    </div>
  )
}

export default Home