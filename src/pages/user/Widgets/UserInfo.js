import React from "react";
import {Typography, Card} from "@mui/material";

export default function UserInfo(props){

    React.useEffect(()=>{
        // TODO: get user data
    },[props.isLogged]);


    return(
        <>
            <Card><Typography>Test</Typography></Card>
        </>
    );
}