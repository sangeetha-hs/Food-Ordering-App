import React from "react";

class UserClass extends React.Component{
    constructor(props){
        super(props)
        this.state={
        userInfo:{
         name:"dumy",
        location:"default",
            }
        }
        //console.log( this.props.name+"child Constructor");
    }
   async componentDidMount(){
        //console.log( this.props.name+"'child component did mount");
        //api call
        const data=  await  fetch("https://api.github.com/users/sangeetha-hs");
        const json=   await data.json();
        console.log(json);

        this.setState({
            userInfo:json,
        })
    }

componentDidUpdate(){
    //console.log("component did update")
}

componentWillUnmount(){
    //console.log("component will unmount")
}

     render(){
        const{name,location,login}=this.state.userInfo;
        //console.log( this.props.name+"child Render")
        return(
    <div className="user-card">
    <h2>name:{name}</h2>
    <h1>location:{location}</h1>
    <h2>contact:@sangeetha</h2>
    <h2>login:{login}</h2>
    
{/* //never update state variables directly */}
</div>
        );
    }
}
export  default UserClass;



/*
....mountong life cycle....
constructror(dummy)
render(dummy)
<Html dummy/>
compnent did mount
<api call>
<this.setstate> state variable is updated


...update

render(api data)
<html (new api data)
componentdid update
****/