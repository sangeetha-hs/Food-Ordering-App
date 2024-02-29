// import { addItem } from "../utilis/cartSlice";
// import { useDispatch } from "react-redux";
// import { CDN_URL } from "../utilis/constants";

// const ItemList=({items,dummy})=>{
//     //console.log(dummy);
//     const dispatch = useDispatch(); 
//     const hanadleAddItems=(item)=>{
//         //dispatch an action
//         dispatch(addItem("item"));
//         {
//             payload:"pizza"
//         }
//     }
// return(
// <>
// <ul>
//     {items.map(item =>(
//         item.card && item.card.info && (
// <div key={item.card.info.id} className="p-2 m-2 border border-gray-200 border-b-2 text-left flex justify-between">
//         {/* "sonpdwu1sdjokcktteuj" */}
        
//         <div className="w-9/12" >
//         <div className="p-2"><span>{item.card.info.name}</span>
//         <span>
            
//             -₹{item.card.info.price 
//         ? item.card.info.price/100
//         : item.card.info.defaultprice/100}</span>
//         </div>
//         <p className="text-xs">{item.card.info.description}</p>
//     </div>
//     <div className="w-3/12 p-4">
//         <div>
//        <div className="absolute"/>
//         <button className="p-2 mx-16 rounded-lg bg-white shadow-lg "
//         onClick={()=>hanadleAddItems(item)
//            //dispatch actions 
//         } >Add+</button>
//         </div>
//         <img src={CDN_URL+ item.card.info.imageId} className="w-full "/>
//     </div>
//     </div>
//         )
//    ) )}
//     </ul> 

// </>
// ) 
// }
//  export default ItemList;





import { useDispatch } from "react-redux";
import { addItem } from "../utilis/cartSlice";
import { CDN_URL } from "../utilis/constants";

const ItemList = ({ items }) => {
    const dispatch = useDispatch(); 

    const handleAddToCart = (item) => {
        // Dispatch the addItem action with the item as payload
        dispatch(addItem(item));
    }

    return (
        <ul>
            {items.map(item => (
                item.card && item.card.info && (
                    <div key={item.card.info.id} className="p-2 m-2 border border-gray-200 border-b-2 text-left flex justify-between">
                        <div className="w-9/12">
                            <div className="p-2">
                                <span>{item.card.info.name}</span>
                                <span>
                                    -₹{item.card.info.price 
                                    ? item.card.info.price/100
                                    : item.card.info.defaultprice/100}
                                </span>
                            </div>
                            <p className="text-xs">{item.card.info.description}</p>
                        </div>
                        <div className="w-3/12 p-4">
                            <div>
                                <button 
                                    className="p-2 mx-16 rounded-lg bg-white shadow-lg"
                                    onClick={() => handleAddToCart(item)}>
                                    Add to Cart
                                </button>
                            </div>
                            <img src={CDN_URL + item.card.info.imageId} className="w-full" />
                        </div>
                    </div>
                )
            ))}
        </ul>
    );
}

export default ItemList;
