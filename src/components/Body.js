import RestaurantCard ,{withPromtedLabel} from "./RestaurantCard";
import { useEffect, useState,useContext } from "react";
import Shimmer from "../components/Shimmer";
import { Link } from "react-router-dom";
//import resList from "../utilis/mockData";
import useOnlineStatus from "../utilis/useOnlineStatus";
import UserContext from "../utilis/userContext";

const Body = () => {
//local  state variable=super powerful variable

 
const [listOfRestuarant,setListOfRestuarant]=useState([]);

const [searchText,setSearchText]=useState([]);
const RestaurantCardPromoted=withPromtedLabel(RestaurantCard);
const [filteredRestaurant,setFilteredRestaurant]=useState();

//console.log("body rendered",listOfRestuarant)
//whenever state variable update,react triggers a reconciliation cycle(re-renders the component)


useEffect (()=>{

fetchData();
},[])

const fetchData = async () => {

  const data = await fetch( "https://corsproxy.org/?https%3A%2F%2Fwww.swiggy.com%2Fdapi%2Frestaurants%2Flist%2Fv5%3Flat%3D12.9351929%26lng%3D77.62448069999999%26is-seo-homepage-enabled%3Dtrue%26page_type%3DDESKTOP_WEB_LISTING")
  
const json = await data.json();
console.log(json);
console.log(listOfRestuarant)
//optional chaining
//setListOfRestuarant(json.data.cards[3].card.card.gridElements.infoWithStyle.restaurants);


setListOfRestuarant(json?.data?.cards[4]?.card?.card?.gridElements?.infoWithStyle?.restaurants)  
setFilteredRestaurant(json?.data?.cards[4]?.card?.card?.gridElements?.infoWithStyle?.restaurants)
}

//conditional rendering=rendering based on the condition 
// if(listOfRestuarant.length===0){
// return<Shimmer/>
// }
const onlineStatus=useOnlineStatus()
if(onlineStatus===false) return <h1>looks like you're offline! please check your 
  internet connection</h1>;

const {loggedInUser, setUserName}=useContext(UserContext);

  return  listOfRestuarant.length === 0 ?  (
    <Shimmer/>
  ):(
  <div className="body">
        
        <div className="filter flex">
          <div className="search m-4 p-4">
            <input type="text" className="border border-solid border-black" value={searchText} 
            onChange={(e)=>
            {
           setSearchText(e.target.value)       
               }}/>
            <button  className="px-4 py-2 bg-green-100 m-4 rounded-lg"
            onClick={()=>{
          console.log(searchText)

          const filteredRestaurant=listOfRestuarant.filter( (res)=> 
          res.info.name.toLowerCase().includes(searchText.toLowerCase())
            
            );
            setFilteredRestaurant(filteredRestaurant);
            }
            }>
              search</button>
          </div>
           <div className="search m-4 p-4 flex items-center">
          {/* <button className="px-4 py-2 bg-gray-100 rounded-lg" 
          onClick={()=>{
            const filteredList=listOfRestuarant.filter(
              (res)=>res?.info?.avgRating > 4.5 */}
              
{/*               
               );
               setListOfRestuarant(filteredList);
        
          }}
          >
            Top Rated Restaurants</button> */}
            <label>
              UserName
            </label>
            <input className="border border-black p-2  
            value={loggedInUser}
            onChange={()=>setUserName(e.target.vaue)}"/>
          </div> 
          
            
        </div>
        <div className="flex flex-wrap-reverse">
          {
            filteredRestaurant?.map((restaurant)=>{
              return <Link
                key={restaurant?.info?.id}
           to={"/restaurants/"+restaurant.info.id}>

                  {restaurant?.info ?.avgRating> 4.2?(
                  <RestaurantCardPromoted resData={restaurant}/>
                  ):(
                  <RestaurantCard  resData={restaurant}/>
                  )}
                  </Link>
            })}
</div>
  
      </div>
    
  );

          }; 
export default Body;




