import { maxWidth } from ".pnpm/172.16.0.100+5002+@mui+system@5.4.0_922a85da57e3646a57465b7970b0de85/node_modules/@mui/system";
import { Typography, Box, Alert } from "@mui/material";
import { render } from "@testing-library/react";
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
