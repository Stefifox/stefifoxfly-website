import React from "react";
import { Box, Button } from "@mui/material";
import LoginForm from "./Widgets/LoginForm";
import ReactSession from "react-client-session/dist/ReactSession";

ReactSession.setStoreType("sessionStorage");
export default function UserPage({ userId, api }) {
  const [isLogged, setLogged] = React.useState(false);
  const [isLoading, setisLoading] = React.useState(true);

  React.useEffect(() => {
    setLogged(ReactSession.get("isLogged"));
    console.log(isLogged);
  }, [isLogged]);

  const loginFunction = (userObj) => {
    if (userObj.username === null || userObj.password === null) {
      // TO-DO Errore di login
      console.log("Vuoto");
    } else {
      console.log(userObj);
      fetch(api + "/login", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(userObj),
      })
        .then((response) => response.json())
        .then((data) => {
          ReactSession.set("isLogged", true);
          setLogged(true);
          console.log(data);
        })
        .catch(() => {
          ReactSession.set("isLogged", false);
          setLogged(false);
        });
    }
  };

  const logout = () => {
    ReactSession.set("isLogged", false);
    setLogged(false);
  };

  if (!isLogged) {
    return (
      <Box
        className="p-8"
        sx={{
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          textAlign: "center",
        }}
      >
        <LoginForm loginFunction={loginFunction} />
      </Box>
    );
  } else {
    return (
      <Button
        onClick={() => {
          logout();
        }}
      >
        Logout
      </Button>
    );
  }
}
