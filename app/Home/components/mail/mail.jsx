import React from "react";
import "./mail.css";
import Button from "@mui/material/Button";
export const Mail = () => {
  return (
    <div className="Mail">
      <h1 className="mailtitle">Save time, Save money</h1>
      <span>sign up and we ưll send the best deals to you</span>
      <div className="chill">
        <input type="text" placeholder="Your Email"></input>
        <Button variant="contained" sx={{ backgroundColor: "gray" }}>
          subrice
        </Button>
      </div>
    </div>
  );
};
