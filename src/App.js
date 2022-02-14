import "./App.css";
import React from "react";
import { Box, Toolbar, AppBar, Button } from "@mui/material";
import HomePage from "./pages/HomePage";
import BlogPage from "./pages/blog/BlogPage";
import PagesConfig from "./pages/PagesConfig";
import { Routes, Route, useNavigate } from "react-router-dom";
import BlogArticleExtended from "./pages/blog/BlogArticleExtended";
import UserPage from "./pages/user/UserPage";
import ReactSession from "react-client-session/dist/ReactSession";

const api_url = "https://stefifoxprojects.it:5210/stefifoxfly/api/v1";

function App() {
  let navigate = useNavigate();
  const [articleList, setAricleList] = React.useState([]);

  ReactSession.setStoreType("sessionStorage");

  return (
    <>
      <Box sx={{ height: "100%" }}>
        <AppBar position="static">
          <Toolbar>
            {PagesConfig.map((page) => (
              <Button
                key={page.label}
                variant="boxed"
                onClick={() => navigate(page.path)}
              >
                {page.label}
              </Button>
            ))}
          </Toolbar>
        </AppBar>
      </Box>
      <Box className="p-12">
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route
            path="/blog"
            element={
              <BlogPage
                api={api_url}
                articleList={articleList}
                setAricleList={setAricleList}
              />
            }
          />
          <Route
            path="/blog/article/:id"
            element={<BlogArticleExtended api={api_url} />}
          />
          <Route path="/user" element={<UserPage api={api_url} />} />
        </Routes>
      </Box>
    </>
  );
}

export default App;
