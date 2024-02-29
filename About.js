import { Component } from "react";
//import React from "react";
import User from "./user";
import UserClass from "./UserClass";
import{component}from "react";
import UserContext from "../utilis/userContext";
  class About extends Component {
    
    constructor(props){
super(props);
//console.log(" parent constructor")
}  

componentDidMount(){
  //  console.log("parent component did mount")
}

render(){
    //console.log(" parent render")
        return(
            <div >
                <h1>About class component</h1>
                <h2>this is namaste react series</h2>
                <div>
                    loggedInUser
                    <UserContext.Consumer>
                        {({loggedInUser})=><h1 className="text-xl font-bold">{loggedInUser}</h1>}
                    </UserContext.Consumer>
                </div>
                <UserClass name={"sangeetha (class)"} location={"mysore"}/>
                
            </div>
        );
    }

};
export default About;


/*
parent constructor
parent render
akshay constructor
akshay render
akshay compnentdidmount
elon constructro
elon render
elon compnemtdidmount


parent constructor
About.js:18  parent render
UserClass.js:11 akshay saini (class)child Constructor
UserClass.js:22 akshay saini (class)child Render
UserClass.js:11 elon musk (class)child Constructor
UserClass.js:22 elon musk (class)child Render

dom updatd in a single batch

UserClass.js:14 akshay saini (class)'child component did mount
UserClass.js:14 elon musk (class)'child component did mount
About.js:14 parent component did mount


*/