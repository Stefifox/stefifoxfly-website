import "./App.css";
import React from "react";
import { Box, Toolbar, AppBar, Button } from "@mui/material";
import HomePage from "./pages/HomePage";
import BlogPage from "./pages/blog/BlogPage";
import PagesConfig from "./pages/PagesConfig";
import { Routes, Route, useNavigate } from "react-router-dom";
import BlogArticleExtended from "./pages/blog/BlogArticleExtended";

const api_url = "http://stefifoxfly.it:5200/api/v1";

function App() {
  let navigate = useNavigate();
  const [articleList, setAricleList] = React.useState([]);
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
        </Routes>
      </Box>
    </>
  );
}

export default App;
