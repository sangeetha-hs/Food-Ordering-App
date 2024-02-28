
import { useState,useEffect} from "react";
import { Menu_Api } from "./constants";

const useRestMenu=(resId)=>{
//fetch data
const [resInfo,setResInfo]=useState(null);
useEffect(()=>{
fetchData();
},[]);

const fetchData=async()=>{
    const data=await fetch(Menu_Api+resId);
const json=await data.json();
setResInfo(json.data);
};

return resInfo;
}
export default useRestMenu;