import { Card, Grid, Typography, TextField, Button } from "@mui/material";
import React from "react";

export default function LoginForm({ loginFunction }) {
  const [userObj, setUserObj] = React.useState({
    username: null,
    password: null,
  });

  const makeObj = (component, value) => {
    userObj[component] = value;
    setUserObj(userObj);
  };

  return (
    <Card sx={{ maxWidth: "512px" }} className="p-8">
      <Grid container spacing={1}>
        <Grid item xs={12}>
          <Typography>Username</Typography>
        </Grid>
        <Grid item xs={12}>
          <TextField
            id="username"
            variant="outlined"
            onBlur={({ target }) => {
              makeObj("username", target.value);
            }}
          />
        </Grid>
        <Grid item xs={12}>
          <Typography>Password</Typography>
        </Grid>
        <Grid item xs={12}>
          <TextField
            id="password"
            variant="outlined"
            type="password"
            onBlur={({ target }) => {
              makeObj("password", target.value);
            }}
          />
        </Grid>
        <Grid item xs={12}>
          <Button onClick={() => loginFunction(userObj)}>Login</Button>
        </Grid>
      </Grid>
    </Card>
  );
}
