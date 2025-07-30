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
  let routes = useRoutes([
    { path: "/", element: <Home /> },
    { path: "/about", element: <About /> },
    { path: "/login", element: <Login /> },
    {
      path: "/article/*", element: <Article />, children: [
        { path: "js", element: <Js /> },
        { path: "php", element: <Php /> },
      ]
    },
    { path: "/panel", element: <Privet><Panel /></Privet> },
    { path: "/course/:id", element: <Course /> }
  ]);

  return <>{routes}</>;
}