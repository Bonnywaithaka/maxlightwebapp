"use client";
import {
  Box,
  styled,
  Link,
  Button,
  useMediaQuery,
  Typography,
} from "@mui/material";
import Image from "next/image";
import React from "react";
import { useTheme } from "@mui/material/styles";
import AccountMenu from "../mobile/Menu";

const StyledLinked = styled(Link)(() => ({
  color: "fff",
  textDecoration: "none",
  marginRight: 5,
}));
// const StyledButton = styled(Button)(({ theme }) => ({
//   color: theme.palette.secondary,
// }));

function Navbar() {
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down("md"));
  if (isMobile) {
    return (
      <Box
        sx={{
          backgroundColor: "#fff",
          color: "#888",
          borderBottom: "1px solid #ff4500",
          height: 70,
          display: "flex",
          justifyContent: "space-between",
          alignItems: "center",
          padding: 1,
        }}
      >
        <Box sx={{ width: "50%" }}>
          <Image
            src="/assets/maxlogo.jpg"
            alt="logo"
            width={120}
            height={80}
          />
          {/* <Typography variant="h6" color="#ff4500">
            MaxLight Electricals
          </Typography>*/}
        </Box>
        <Box>
          <AccountMenu />
        </Box>
      </Box>
    );
  }
  return (
    <Box
      sx={{
        backgroundColor: "#fff",
        borderBottom: "1px solid #ff4500",
        height: 80,
        display: "flex",
        justifyContent: "flex-start",
        alignItems: "center",
        padding: 1,
      }}
    >
      <Box sx={{ width: "50%" }}>
        <Image src="/assets/maxlogo.jpg" alt="logo" width={150} height={100} />
        {/* <Typography variant="h6" color="#ff4500">
          MaxLight Electronics & Bathroom Accessories
        </Typography> */}
      </Box>

      <Box
        sx={{ display: "flex", justifyContent: "space-between", width: "20%" }}
      >
        <StyledLinked href="/" underline="hover" color="#888">
          Home
        </StyledLinked>
        <StyledLinked href="/products" underline="hover" color="#888">
          Products
        </StyledLinked>
        <StyledLinked href="/about" underline="hover" color="#888">
          About
        </StyledLinked>
        <StyledLinked href="/" underline="hover" color="#888">
          Contact Us
        </StyledLinked>
      </Box>
    </Box>
  );
}

export default Navbar;
