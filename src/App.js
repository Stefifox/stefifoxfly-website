import "./App.css";
import React from "react";
import { Box, Toolbar, AppBar, Button } from "@mui/material";
import HomePage from "./pages/HomePage";
import BlogPage from "./pages/blog/BlogPage";
import PagesConfig from "./pages/PagesConfig";
import { Routes, Route, useNavigate } from "react-router-dom";
import BlogArticleExtended from "./pages/blog/BlogArticleExtended";
import UserPage from "./pages/user/UserPage";
import Maintenance from "./pages/Maintenance";
import ReactSession from "react-client-session/dist/ReactSession";

const api_url = "http://stefifoxprojects.it:5210/stefifoxfly/api/v1";

function App() {
  let navigate = useNavigate();
  const [articleList, setAricleList] = React.useState([]);

  ReactSession.setStoreType("sessionStorage");

  return (
    <>
      <Maintenance />
    </>
  );
}

export default App;
