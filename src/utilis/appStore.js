import { configureStore } from "@reduxjs/toolkit";
import cartReducer from "./cartSlice" 
import { UseSelector } from "react-redux";
const appStore=configureStore({
    reducer:{
        cart:cartReducer,
    },
}

);

export default appStore;


