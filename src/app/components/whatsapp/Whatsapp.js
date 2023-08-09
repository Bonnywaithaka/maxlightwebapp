"use client";
import { Avatar, Box } from "@mui/material";
import React from "react";
import WhatsAppIcon from "@mui/icons-material/WhatsApp";

const WhatsAppFloating = () => {
  const handleWhatsAppClick = () => {
    // Replace 'PHONE_NUMBER' with the desired phone number (with the country code).
    // You can also include a pre-filled message by appending '&text=YOUR_MESSAGE' to the URL.
    const phoneNumber = "PHONE_NUMBER";
    window.open(`https://wa.me/${phoneNumber}`, "_blank");
  };

  return (
    <div
      style={{
        position: "fixed",
        bottom: "40px",
        right: "20px",
        width: "50px",
        height: "50px",
        backgroundColor: "#25D366", // WhatsApp green color
        borderRadius: "50%",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        cursor: "pointer",
        boxShadow: "0 2px 4px rgba(0, 0, 0, 0.2)",
      }}
      onClick={handleWhatsAppClick}
    >
      <Box>
        <Avatar style={{ backgroundColor: "#25D366" }}>
          <WhatsAppIcon />
        </Avatar>
      </Box>
    </div>
  );
};

export default WhatsAppFloating;
