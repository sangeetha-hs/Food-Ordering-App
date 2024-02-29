import { createSlice,current } from "@reduxjs/toolkit";

const cartSlice=createSlice({
    name:'cart',
    initialState:{
        items:[]
    },
    reducers:{
      addItem:(state,action)=>{
        
    //reduxtoolkit uses immer bts
    //we have to mutate the state
        state.items.push(action.payload);
      } ,
    
        removeItem:(state)=>{
            state.items.pop();
        },
        // original state {items =['pizza']}
        clearCart:(state,action)=>{
        
           
           //state.items.length=0;
           return{items:[]};//this new  object[ will be replaced inside originalstate=[]
        },
},
});



export const{addItem,removeItem,clearCart}=cartSlice.actions;
export default cartSlice.reducer;


//vanila(state) redux  => dont mutate state,returning was mandtory
    //     const newState=[...state]
    //     newState.items.push(action.payload);
    //  return newState;
    //state.items.length=0;  //state=[]
           //RTk=EITHER MUTATE THE STATE or return the state