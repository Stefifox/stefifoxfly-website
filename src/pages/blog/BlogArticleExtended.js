import { Typography, Box, Alert } from "@mui/material";
import React from "react";
import { useParams } from "react-router-dom";

export default function BlogArticleExtended({ api }) {
  let { id } = useParams();

  const [article, setArticle] = React.useState({});
  const [isLoading, setisLoading] = React.useState(true);

  React.useEffect(() => {
    fetch(api + "/getArticle?id=" + id)
      .then((response) => response.json())
      .then((data) => {
        setArticle(data);
        setisLoading(false);
      });
  }, []);

  if (isLoading) {
    return (
      <Box
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
      </Box>
    );
  } else {
    return (
      <>
        <Typography variant="h3">{article.title}</Typography>
        <Typography variant="h6">{article.subtitle}</Typography>
        {article.img !== null ? (
          <Box
            className="p-8"
            sx={{
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
              textAlign: "center",
            }}
          >
            <img
              alt={article.title}
              src={article.img}
              style={{ maxWidth: "512px" }}
            />
          </Box>
        ) : null}
        <Typography>{article.content}</Typography>
      </>
    );
  }
}
