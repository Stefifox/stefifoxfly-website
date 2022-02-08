import React from "react";
import { Paper, Grid, Alert, Button, Typography } from "@mui/material";
import BlogArticle from "./BlogArticle";

export default function BlogPage({ api, articleList, setAricleList }) {
  const [isLoading, setisLoading] = React.useState(true);
  const [refresh, setRefresh] = React.useState(0);

  React.useEffect(() => {
    setisLoading(true);
    fetch(api + "/getArticle")
      .then((response) => response.json())
      .then((data) => {
        setRefresh(0);
        setisLoading(false);
        setAricleList(data);
      });
  }, [api, refresh]);

  if (isLoading) {
    return (
      <Paper
        elevation={0}
        sx={{
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          textAlign: "center",
        }}
      >
        <Alert sx={{ maxWidth: "512px" }} severity="info">
          Loading data
        </Alert>
      </Paper>
    );
  } else {
    return (
      <>
        <Paper
          elevation={0}
          sx={{
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            textAlign: "center",
          }}
        >
          <Typography variant="h4">Blog Page</Typography>
        </Paper>
        <div className="p-8" />
        <Paper
          elevation={0}
          sx={{
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            textAlign: "center",
          }}
        >
          <Grid container spacing={2} sx={{ maxWidth: "512px" }}>
            {articleList.map((art) => (
              <Grid xs={12} item key={art.id}>
                <BlogArticle
                  id={art.id}
                  title={art.title}
                  subtitle={art.subtitle}
                  img={art.img}
                  content={art.content}
                />
              </Grid>
            ))}
          </Grid>
        </Paper>
        <div className="p-8" />
        <Paper
          elevation={0}
          sx={{
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            textAlign: "center",
          }}
        >
          <Button variant="outlined" onClick={() => setRefresh(1)}>
            Refresh
          </Button>
        </Paper>
      </>
    );
  }
}
