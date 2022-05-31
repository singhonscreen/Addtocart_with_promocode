import React, { useContext } from 'react';
import { CartDetail } from '../App';

const Items = ({ id, description, name, imgUrl, price, quantity }) => {
  const { removeItem, increment, decrement } = useContext(CartDetail);

  return (
    <>
        <div className="container">
            <div className='imgContainer' >
                <img src={imgUrl} alt=""  />
                <div>
                <button onClick={()=>decrement(id)} >-</button>
                <input   type="text" placeholder={quantity}  />
                <button onClick={()=>increment(id)} >+</button>
                </div>
                <p style={{width:100, background:"blue",textAlign:"center",padding:5,marginLeft:10,marginTop:10,color:"#fff"}}>&#x24; {(price*quantity).toFixed(2)}</p>
            </div>
            <div className="productName">
                <p>{name}</p>
                <p>&#x24; {price}</p>
            </div>
            <div style={{marginLeft:10,alignSelf:"flex-start"}} >
            <h4>About product</h4>
            <p>This is a very good product</p>
            </div>
            </div>
    </>
  )
}

export default Items