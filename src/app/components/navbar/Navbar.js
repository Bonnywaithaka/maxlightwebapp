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
          borderBottom: "2px solid #ff4500",
          height: 50,
          display: "flex",
          justifyContent: "space-between",
          alignItems: "center",
          padding: 1,
        }}
      >
        <Box sx={{ width: "50%" }}>
          {/* <Image src="/assets/sitelogo.bmp" alt="logo" width={100} height={60} />
        <Image
          src="/assets/dahualogo.png"
          alt="dlogo"
          width={100}
          height={60}
        /> */}
          <Typography variant="h6">MaxLight Electricals</Typography>
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
        color: "#000",
        borderBottom: "2px solid #ff4500",
        height: 50,
        display: "flex",
        justifyContent: "flex-start",
        alignItems: "center",
        padding: 1,
      }}
    >
      <Box sx={{ width: "50%" }}>
        <Image src="/assets/sitelogo.bmp" alt="logo" width={100} height={60} />
        <Image
          src="/assets/dahualogo.png"
          alt="dlogo"
          width={100}
          height={60}
        />
      </Box>

      <Box
        sx={{ display: "flex", justifyContent: "space-evenly", width: "20%" }}
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
      </Box>
      <Box>
        <StyledLinked href="/email">
          <Button variant="contained" size="small" color="secondary">
            Get Quote
          </Button>
        </StyledLinked>
      </Box>
    </Box>
  );
}

export default Navbar;
