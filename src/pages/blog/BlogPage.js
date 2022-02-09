import React from "react";
import {
  Paper,
  Grid,
  Alert,
  Button,
  Typography,
  AlertTitle,
} from "@mui/material";
import BlogArticle from "./BlogArticle";

export default function BlogPage({ api, articleList, setAricleList }) {
  const [isLoading, setisLoading] = React.useState(true);
  const [refresh, setRefresh] = React.useState(0);
  const [error, setError] = React.useState(false);

  React.useEffect(() => {
    setisLoading(true);
    setError(false);
    fetch(api + "/getArticle")
      .then((response) => response.json())
      .then((data) => {
        setRefresh(0);
        setisLoading(false);
        setAricleList(data);
      })
      .catch((error) => {
        setRefresh(0);
        setError(true);
        setisLoading(false);
      });
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [refresh]);

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
    if (error) {
      return (
        <Paper
          elevation={0}
          sx={{
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
          }}
        >
          <Alert
            sx={{ maxWidth: "512px" }}
            severity="error"
            action={
              <Button
                color="inherit"
                size="small"
                onClick={() => setRefresh(1)}
              >
                Retry
              </Button>
            }
          >
            <AlertTitle>Sorry</AlertTitle>
            An unknown error occurred while loading the data. Try again.
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
}
