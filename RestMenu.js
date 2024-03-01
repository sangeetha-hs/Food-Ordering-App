// //  import { useState,useEffect } from "react";  
// // import Shimmer from "./Shimmer";
// //    //import { CDN_URL } from "../utilis/constants";
   
// //    const RestMenu = () => {
// //     const [resInfo,setResInfo]=useState(null);
// //     useEffect(()=>{
// // fetchMenu();
// //     },[]);

// //     const fetchMenu=async()=>{
       
// //      const data=await fetch("https://corsproxy.org/?https%3A%2F%2Fwww.swiggy.com%2Fdapi%2Fmenu%2Fpl%3Fpage-type%3DREGULAR_MENU%26complete-menu%3Dtrue%26lat%3D12.9351929%26lng%3D77.62448069999999%26restaurantId%3D140887"
// //      )
// //      const json = await data.json();
// //     console.log(json);
    
// //     setResInfo(json.data);
// //     };

// // if(resInfo!==null){
// //     var {name,cuisines,cloudinaryImageId,costForTwoMessage}=resInfo?.cards[0]?.card?.card?.info;
// // }
 
// // const {itemCards}=resInfo?.cards[2]?.groupedCard?.cardGroupMap?.REGULAR?.cards[2]?.card?.card;

// // //data.cards[2].groupedCard.cardGroupMap.REGULAR.cards[2].card.card.itemCards
// // //data.cards[2].groupedCard.cardGroupMap.REGULAR.cards[2].card.card
// // return resInfo===null?(
// // <Shimmer/>
// // ):(
    
        
// // <div className="menu">
// //     <h1>{name}</h1>
    
// //     <p>{cuisines.join(",")}-{costForTwoMessage}</p>
    
// //     <h4>{cloudinaryImageId}</h4>
// //     {/* <img src={CDN_URL+cloudinaryImageId}/> */}
// //     <h2>menu</h2>
// // <ul>
// //     <li>Biriyani</li>
// //     <li>Burgers</li>
// //     <li>Diet coke</li>
// // </ul>
// // </div>
// //     ) ;
// // };

// // export default RestMenu;


  
import Shimmer from "./Shimmer";
import {useParams}from "react-router-dom";
import useRestMenu from "../utilis/useRestMenu";
import RestaurantCategory from "./RestaurantCategories";
import { useState } from "react";
   
//import { Menu_Api } from "../utilis/constants";

   //import { CDN_URL } from "../utilis/constants";
   
   const RestMenu = () => {
    const {resId}=useParams()

    const dummy ="dummy data"
    const resInfo = useRestMenu(resId);
      //console.log(params)
      const [showIndex,setShowIndex]=useState(null);
      console.log(resInfo)

if(resInfo===null) return <Shimmer/>;
    var {name,cuisines,cloudinaryImageId,costForTwoMessage}=resInfo?.cards[0].card.card.info;

 
const itemCards=resInfo?.cards[2].groupedCard.cardGroupMap.REGULAR.cards
console.log(resInfo?.cards[2].groupedCard.cardGroupMap.REGULAR.cards[2].card.card)


//data.cards[2].groupedCard.cardGroupMap.REGULAR.cards[2].card.card.itemCards
//data.cards[2].groupedCard.cardGroupMap.REGULAR.cards[2].card.card
const categories=resInfo?.cards[2]?.groupedCard?.cardGroupMap?.REGULAR?.cards.filter(
(c)=>
c.card?.["card"]?. ["@type"]==="type.googleapis.com/swiggy.presentation.food.v2.ItemCategory"
)
//console.log(categories)
return (
    
        
<div className="text-center">
    <h1 className="font-bold my-10 text-2xl">{name}</h1>
    
    <h2>{cuisines.join(",")}-{costForTwoMessage}</h2>
    
    <h4>{cloudinaryImageId}</h4>

    {/*categories accordians*/}
    {itemCards.map((category,index)=>{
    return  category?.card?.card?.itemCards && 
    //controlled component
    <RestaurantCategory 
    key={category?.card.card.title}
    data={category?.card.card}
    showItem={index===showIndex ? true: false}
    setShowIndex={()=>setShowIndex(index)}
    dummy={dummy}/>
    
    })}
    {/* <img src={CDN_URL+cloudinaryImageId}/> */}
    {/* <h2>Menu</h2> */}

</div>
    ) ;
};

export default RestMenu;


