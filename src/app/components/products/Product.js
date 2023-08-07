"use client";
import { Box, Typography, IconButton } from "@mui/material";
import Image from "next/image";
import React from "react";
import WhatsAppIcon from "@mui/icons-material/WhatsApp";
import InstagramIcon from "@mui/icons-material/Instagram";
import FacebookOutlinedIcon from "@mui/icons-material/FacebookOutlined";

function Product({ image, name, price, description }) {
  const handleWhatsAppButtonClick = () => {
    // Replace 'PHONE_NUMBER' with the desired phone number (with the country code).
    // You can also include a pre-filled message by appending '&text=YOUR_MESSAGE' to the URL.
    const phoneNumber = "+254706134055";
    window.open(`https://wa.me/${phoneNumber}`, "_blank");
  };
  return (
    <Box
      sx={{
        borderRadius: 4,
        padding: 0,
      }}
    >
      <Box
        sx={{
          display: "flex",
          justifyContent: "center",
        }}
      >
        <Image src={image} alt="no image" width={315} height={300} />
      </Box>
      <Box sx={{ margin: "10px 0px 0px 0px" }}>
        <Typography variant="h4" fontSize={18} color="#3a3b3c">
          <b>{name}</b>
        </Typography>
        {/* <Typography variant="h6">{`@ Ksh: ${price}`}</Typography>
        <IconButton onClick={() => handleWhatsAppButtonClick()}>
          <WhatsAppIcon />
        </IconButton>
        <IconButton>
          <InstagramIcon />
        </IconButton>
        <IconButton>
          <FacebookOutlinedIcon />
        </IconButton> */}
      </Box>
    </Box>
  );
}

export default Product;
