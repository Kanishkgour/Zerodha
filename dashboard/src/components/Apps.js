import React from "react";

const queryParams = new URLSearchParams(window.location.search);
const name = queryParams.get('name');
const message = queryParams.get('message');

const Apps = () => {
console.log("Dashboard   Name :" , name);
console.log("Dashboard   Message :" , message);

  return <h1>Apps</h1>;
};

export default Apps;
