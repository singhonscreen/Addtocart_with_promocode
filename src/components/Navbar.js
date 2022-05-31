import { Link } from "react-router-dom";
import { AiOutlineShoppingCart } from "react-icons/ai";
import { CartDetail } from '../App';
// import { Link } from "react-router-dom";
import React, { useContext } from 'react';

const Navbar = () => {
  const {  totalItem, totalAmount } = useContext(CartDetail);
  // const value = useContext(CartDetail)
    return (
        <div className="navbarContainer">
        <ul>
            <li className="navbar">
                <Link to="/" >
                    <h1>Home</h1>
                </Link>
            </li>
            
            
            
            <li style={{position:"relative"}}>
                <Link to="/products-cart" >
                <p style={{position:"absolute",left:25,top:-7,width:20,height:20,background:"gray",borderRadius:"50%", textAlign:"center",paddingTop:2}} >{totalItem}</p>
                <AiOutlineShoppingCart color='white' size={30} />
                </Link>
            </li>
        </ul>
        </div>
    )
}

export default Navbar