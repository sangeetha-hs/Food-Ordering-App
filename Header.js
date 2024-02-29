<<<<<<< HEAD
import { LOGO_URL } from "../utilis/constants";
import { useState } from "react";
 const Header = () => {


  const [btnNameReact,setBtnNameReact]=useState('login');
  console.log('header renfer')
    return (
      <div className="header">
        <div className="logo-container">
          <img className="logo" src={LOGO_URL}/>
        </div>
        <div className="nav-items">
          <ul>
            <li>Home</li>
            <li>About Us</li>
            <li>Contact Us</li>
            <li>Cart</li>
            <button className="login" onClick={()=>{
                 btnNameReact==="login"
               ?setBtnNameReact ("logout")
                :setBtnNameReact("login")
              console.log(btnNameReact);
            }}
            >
              {btnNameReact}
            </button>
          </ul>
        </div>
      </div>
    )
  }

  export default Header;
  

  //there r two types of export/import
  //default export/import
  //export default<name of a variable>
  //import component from path

  //named export/import
  //export const component;
=======
import { LOGO_URL } from "../utilis/constants";
import { useState,useEffect ,useContext} from "react";
import {Link} from "react-router-dom";
import useOnlineStatus from "../utilis/useOnlineStatus";
import UserContext from "../utilis/userContext";
import cartSlice from "../utilis/cartSlice";
import { useSelector } from "react-redux";


 const Header = () => {
  const [btnNameReact,setBtnNameReact]=useState('login');
  console.log('header renfer')


  const onlineStatus=useOnlineStatus();

  const {loggedInUser}=useContext(UserContext);

 const cartItems = useSelector((store) => store.cart.items);
console.log(cartItems)
  //console.log(loggedInUser)
//subscrobing to the store using a selector
   
  useEffect(()=>{
    console.log('useeffect called')
  },[btnNameReact]);

    return (
      <div className="flex justify-between bg-pink-100 shadow-lg  sm:bg-yellow-50 lg:">
        <div className="logo-container">
          <img className="w-56" src={LOGO_URL}/>
        </div>
        <div className="flex items-center">
          <ul className="flex p-4 m-4">
            <li className="px-4">
              Online Status: {onlineStatus ? "✔" : "🔴" }
            </li>
            <li className="px-4">
              <Link to="/"> Home</Link>
             </li>
            <li className="px-4">
              <a  href="/about">About Us</a></li>

            <li className="px-4" >
              <Link to="/contact">Contact Us</Link>
              </li>

              <li className="px-4 ">
              <Link to="/grocery">Grocery</Link>
              </li>



            <li className="px-4 font-bold text-xl">
              
              <Link to="/cart">Cart-({cartItems.length}items)</Link>

              {/* <Link to="/cart">(
                {cartItems.length===1 ? `${cartItems.length} item` : `${cartItems.length} items`}
              )</Link> */}
              </li>
            <button className="login" onClick={()=>{
                 btnNameReact==="login"
               ?setBtnNameReact ("logout")
                :setBtnNameReact("login")
              console.log(btnNameReact);
            }}
            >
              {btnNameReact}
            </button>
            <li className="px-4 font-bold">{loggedInUser}</li>
          </ul>
        </div>
      </div>
    )
  }

  export default Header;
  

  //there r two types of export/import
  //default export/import
  //export default<name of a variable>
  //import component from path

  //named export/import
  //export const component;
>>>>>>> 6753e2b004c665cb8d020f66d9c593463f3d3e48
  //import{component from path}