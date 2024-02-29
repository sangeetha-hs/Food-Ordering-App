// import React,{useState} from "react";
// import ItemList from "./itemList";

// const RestaurantCategory=({data})=>{
//     //console.log(data)
//     const {showItem,setShowItem}=useState(false)

//      const handleClick=()=>{
//         setShowItem(showItem);
//      }
//     return<div>
//         {/* {/* header */}
//         <div className="w-6/12 mx-auto my-4 bg-gray-50 shadow-lg p-4 ">
            
//             <div className="flex-justify-between" onClick={handleClick}>
//             <span>{data?.title && data?.title}{data?.itemCards?.length}</span>
//             <span> ⬇</span>
//         </div>

//                 {/* accordian body */} 
//                {  showItem && data.itemCards && < ItemList  items={data.itemCards }/> } 
//     </div>
//     </div>
// }
// export default RestaurantCategory;



// import React, { useState } from "react";
// import ItemList from "./itemList";

// const RestaurantCategory = ({ data,showItem }) => {
//     const [showItem, setShowItem] = useState(1);

//     const handleClick = () => {
//         //setShowItem(prevShowItem => !prevShowItem); // Toggle showItem value
//     };

//     return (
//         <div>
//             <div className="w-6/12 mx-auto my-4 bg-gray-50 shadow-lg p-4 ">
//                 <div className="flex justify-between" onClick={handleClick}>
//                     <span>{data?.title && data.title} {data?.itemCards?.length}</span>
//                     <span> ⬇</span>
//                 </div>
//                 {/* accordion body */}
//                 {showItem && data.itemCards && <ItemList items={data.itemCards} />}
//             </div>
//         </div>
//     );
// }

// export default RestaurantCategory;


import React, { useState } from "react";
import ItemList from "./itemList";

const RestaurantCategory = ({ data, showItem,setShowIndex,dummy }) => {
    const [showAccordion, setShowAccordion] = useState(false);

    const handleClick = () => {
        setShowAccordion(prevState => !prevState); // Toggle the accordion state
        setShowIndex();
    };

    return (
        <div>
            <div className="w-6/12 mx-auto my-4 bg-gray-50 shadow-lg p-4 ">
                <div className="flex justify-between" onClick={handleClick}>
                    <span>{data?.title && data.title} {data?.itemCards?.length}</span>
                    <span> ⬇</span>
                </div>
                {/* Accordion body */}
                {showAccordion && data.itemCards && <ItemList items={data.itemCards} dummy={dummy} />}
            </div>
        </div>
    );
}

export default RestaurantCategory;
