import React, { useState } from "react";

import Dashboard from "./Dashboard";
import TopBar from "./TopBar";
import { Alert, AlertTitle, Collapse } from "@mui/material";
import { useLocation } from "react-router-dom";

const Home = () => {

  const [name, setName] = useState('');
  const [message, setMessage] = useState('');
  const [showAlert, setShowAlert] = React.useState(true);
  const location = useLocation();
  const formData = location.state;
  console.log("Dashboard : ", formData)
  console.log(location.state)

  React.useEffect(() => {
    const timer = setTimeout(() => setShowAlert(false), 5000);
    return () => clearTimeout(timer); // cleanup on unmount
  }, []);


  React.useEffect(() => {
    const queery = new URLSearchParams(window.location.search)
    const message = queery.get('message');
    const userEmail = queery.get('email');
    const params = new URLSearchParams(location.search);
    const name = params.get("name");
    console.log("name", name);

    if (userEmail) setName(userEmail);
    if (message) setMessage(message);

    console.log("useremail  : ", queery.name);
    console.log("queery  : ", window.location);
    console.log("Message : ", message);
  }, [])


  return (
    <>
      <Collapse in={showAlert}>
        {(
          <Alert severity="success" sx={{ mt: 2 }}>
            <AlertTitle>ZerodhaReplica Says</AlertTitle>
            {message} <br />
            {name} Welcome Back !
          </Alert>
        )}
      </Collapse>
      <TopBar />
      <Dashboard />
    </>
  );
};

export default Home;
