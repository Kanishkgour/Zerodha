import React, { useState } from "react";

import Dashboard from "./Dashboard";
import TopBar from "./TopBar";
import { Alert, AlertTitle, Collapse } from "@mui/material";

const Home = () => {

  const [name , setName] = useState('');
  const [message , setMessage] = useState('');
  const [showAlert, setShowAlert] = React.useState(true);
  // const location = useLocation();
  // const formData = location.state;
  // console.log("Dashboard : ", formData) 
  // console.log(location.state)
  
  React.useEffect(() => {
    const timer = setTimeout(() => setShowAlert(false), 5000);
    return () => clearTimeout(timer); // cleanup on unmount
  }, []);
  
  
  React.useEffect(() => {
    const queery = new URLSearchParams(window.location.search)
    const name = queery.get('name');
    const message = queery.get('message');

    if(name) setName(name);
    if(message) setMessage(message);

      console.log("Name : ", name);
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
