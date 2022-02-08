import React from "react";
import { Paper, Typography, Grid } from "@mui/material";

export default function HomePage() {
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
      <Grid container spacing={1}>
        <Grid item xs={12}>
          <Typography variant="h3">Home Page</Typography>
        </Grid>
        <Grid item xs={12}>
          <Typography>Qualcosa</Typography>
        </Grid>
      </Grid>
    </Paper>
  );
}
