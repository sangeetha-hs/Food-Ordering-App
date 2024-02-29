<<<<<<< HEAD
import { CDN_URL } from "../utilis/constants";

const RestaurantCard = (props) => {
    // console.log("props info:", props?.resData[0].info.name)
    // console.log(RestaurantCard )
    const { resData } = props;
  
    const {
        cloudinaryImageId,
      name,
      avgRating,
      cuisines,
      costForTwo,
      sla,
    } =resData?.info;
    console.log(props.resData.info);
    return (
      <div className="res-card" style={{ backgroundColor: '#f0f0f0' }}>
        <img className="res-logo"  src={CDN_URL + cloudinaryImageId} />
        <h3>{name}</h3>
        <h3 style={{width:"inherit"}}>{cuisines.join(",")}</h3> 
        <h3>{avgRating}stars</h3>
        <h4>{costForTwo}</h4>
        <h4>{sla.deliveryTime} minutes</h4>
      </div>
    )
  }
  
  //media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_660/xqwpuhgnsaf18te7zvtv" + cloudinaryImageId} 
  
  
  
=======
import { useContext } from "react";
import { CDN_URL } from "../utilis/constants";
import UserContext from "../utilis/userContext";

const RestaurantCard = (props) => {
    // console.log("props info:", props?.resData[0].info.name)
    // console.log(RestaurantCard )
    const { resData } = props;
  
    const {loggedInUser}=useContext(UserContext)
    const {
        cloudinaryImageId,
      name,
      avgRating,
      cuisines,
      costForTwo,
      sla,
    } =resData?.info;
    console.log(props.resData.info);
    return (
      <div className="m-4 p-4 w-[250px] rounded-lg bg-gray-50 hover:bg-gray-400" 
      >
        <img className="rounded-lg"  src={CDN_URL + cloudinaryImageId} />
        <h3 className="font-bold py-4 text-xl">{name}</h3>
        <h3 style={{width:"inherit"}}>{cuisines.join(",")}</h3> 
        <h3>{avgRating}stars</h3>
        <h4>{costForTwo}</h4>
        <h4>{sla.deliveryTime} minutes</h4>
        <h4>User:{loggedInUser} </h4>
      </div>
    )
  }
  
  //media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_660/xqwpuhgnsaf18te7zvtv" + cloudinaryImageId} 
  
  //higher order function
  //input-restuarantCard=>restuarantCard Promoted

  export const withPromtedLabel=(RestaurantCard)=>{
    return (props)=>{
      return(
        <div>
          <label className="absolute bg-black text-white m-2 p-2 rounded-lg">
            Promoted</label>
          <RestaurantCard {...props}/>
        </div>
      )
    }
  }
  
>>>>>>> 6753e2b004c665cb8d020f66d9c593463f3d3e48
export default RestaurantCard;  