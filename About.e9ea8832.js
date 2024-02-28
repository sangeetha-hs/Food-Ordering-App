function e(e,n,s,t){Object.defineProperty(e,n,{get:s,set:t,enumerable:!0,configurable:!0})}function n(e){return e&&e.__esModule?e.default:e}var s=globalThis.parcelRequire21de,t=s.register;t("h0EEC",function(n,t){Object.defineProperty(n.exports,"__esModule",{value:!0,configurable:!0}),e(n.exports,"default",()=>i);var o=s("ayMG0"),a=s("acw62");s("cMXDl");var r=s("j6ssx"),c=s("bFixG");class l extends a.Component{constructor(e){super(e);//console.log(" parent constructor")
}componentDidMount(){//  console.log("parent component did mount")
}render(){//console.log(" parent render")
return/*#__PURE__*/(0,o.jsxs)("div",{children:[/*#__PURE__*/(0,o.jsx)("h1",{children:"About class component"}),/*#__PURE__*/(0,o.jsx)("h2",{children:"this is namaste react series"}),/*#__PURE__*/(0,o.jsxs)("div",{children:["loggedInUser",/*#__PURE__*/(0,o.jsx)(c.default.Consumer,{children:({loggedInUser:e})=>/*#__PURE__*/(0,o.jsx)("h1",{className:"text-xl font-bold",children:e})})]}),/*#__PURE__*/(0,o.jsx)(r.default,{name:"sangeetha (class)",location:"mysore"})]})}}var i/*
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


*/=l}),t("cMXDl",function(e,n){s("ayMG0"),s("acw62")}),t("j6ssx",function(t,o){e(t.exports,"default",()=>l);var a=s("ayMG0"),r=s("acw62");class c extends /*@__PURE__*/n(r).Component{constructor(e){super(e),this.state={userInfo:{name:"dumy",location:"default"}};//console.log( this.props.name+"child Constructor");
}async componentDidMount(){//console.log( this.props.name+"'child component did mount");
//api call
let e=await fetch("https://api.github.com/users/sangeetha-hs"),n=await e.json();console.log(n),this.setState({userInfo:n})}componentDidUpdate(){//console.log("component did update")
}componentWillUnmount(){//console.log("component will unmount")
}render(){let{name:e,location:n,login:s}=this.state.userInfo;//console.log( this.props.name+"child Render")
return/*#__PURE__*/(0,a.jsxs)("div",{className:"user-card",children:[/*#__PURE__*/(0,a.jsxs)("h2",{children:["name:",e]}),/*#__PURE__*/(0,a.jsxs)("h1",{children:["location:",n]}),/*#__PURE__*/(0,a.jsx)("h2",{children:"contact:@sangeetha"}),/*#__PURE__*/(0,a.jsxs)("h2",{children:["login:",s]})]})}}var l/*
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
****/=c});//# sourceMappingURL=About.e9ea8832.js.map

//# sourceMappingURL=About.e9ea8832.js.map
