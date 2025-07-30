import React from "react";
import { useRoutes } from "react-router-dom";
import Home from "./pages/Home";
import About from "./pages/About";
import Login from "./pages/Login";
import Article from "./pages/Article";
import Panel from "./pages/Panel";
import Course from "./pages/Course";
import Js from "./pages/Js";
import Php from "./pages/Php";
import Privet from "./pages/Privet";


export default function App() {
  let routes=useRoutes([
    {path:"/",element:<Home></Home>},
    {path:"/about",element:<About></About>},
    {path:"/login",element:<Login></Login>},
    {path:"/article/*",element:<Article></Article>,children:[
      {path:"js",element:<Js></Js>},
      {path:"php",element:<Php></Php>},
    
    
    ]},
    {path:"/panel",element:<Privet><Panel></Panel></Privet>},
    {path:"/course/:id", element:<Course></Course>}
  ])
  return (
    <>
    {routes}
    </>
  );
}
