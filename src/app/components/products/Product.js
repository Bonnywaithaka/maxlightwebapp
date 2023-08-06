"use client";
import { Box, Typography, IconButton } from "@mui/material";
import Image from "next/image";
import React from "react";
// import InstagramIcon from "@mui/icons-material/Instagram";
// import FacebookOutlinedIcon from "@mui/icons-material/FacebookOutlined";
// import TwitterIcon from "@mui/icons-material/Twitter";
// import WhatsAppIcon from "@mui/icons-material/WhatsApp";

function Product({ image, name, price, description }) {
  return (
    <Box
      sx={{
        border: "2px solid orange",
        borderRadius: 4,
        padding: 2,
      }}
    >
      <Box
        sx={{
          display: "flex",
          justifyContent: "center",
        }}
      >
        <Image src={image} alt="no image" width={200} height={200} />
      </Box>
      <Box>
        <Typography>Product Name: {name}</Typography>
        <Typography>description: {price}</Typography>
        <Typography>Price Ksh. 2500</Typography>
        {/* <IconButton>
          <TwitterIcon />
        </IconButton>
        <IconButton>
          <InstagramIcon />
        </IconButton>
        <IconButton>
          <FacebookOutlinedIcon />
        </IconButton>
        <IconButton>
          <WhatsAppIcon />
        </IconButton> */}
      </Box>
    </Box>
  );
}

export default Product;
