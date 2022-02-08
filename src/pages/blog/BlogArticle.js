import React from "react";
import {
  Button,
  Card,
  CardActions,
  CardContent,
  CardMedia,
  Typography,
} from "@mui/material";
import { useNavigate } from "react-router-dom";

export default function BlogArticle({ id, title, subtitle, img, content }) {
  const navigate = useNavigate();

  return (
    <Card sx={{ maxWidth: "512px", border: "2px", borderStyle: "solid" }}>
      {img !== null ? (
        <CardMedia component="img" height="150" image={img} alt={title} />
      ) : null}
      <CardContent>
        <Typography fontSize={24} fontWeight={"bold"}>
          {title}
        </Typography>
        <Typography fontSize={14} fontWeight={"italic"}>
          {subtitle}
        </Typography>
      </CardContent>
      <CardActions>
        <Button onClick={() => navigate("/blog/article/" + id)}>Open</Button>
      </CardActions>
    </Card>
  );
}
