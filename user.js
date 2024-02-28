//import { useState } from "react";

import { useEffect, useState } from "react";

const User=({name})=>{
    //console.log(name)
    const [count] = useState(0);
    const [count2]=useState(1);

useEffect(()=>{
//api calls
},[])
    return (
    <div className="user-card m-4 p-4 bg-gray-50 rounded-lg">
<h2>Name:{name}</h2>
<h2>Count={count}</h2>
<h2>Location:Dehradun</h2>
<h3>contact:@Akshaysaini</h3>

    </div>
    )   
}
export default User;