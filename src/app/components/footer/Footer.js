"use client";
import { Box, Divider, Grid, IconButton, Typography } from "@mui/material";
import React from "react";
import InstagramIcon from "@mui/icons-material/Instagram";
import FacebookOutlinedIcon from "@mui/icons-material/FacebookOutlined";
import TwitterIcon from "@mui/icons-material/Twitter";

function Footer() {
  return (
    <Box
      sx={{
        backgroundColor: "#fff",
        marginTop: 10,
        minHeight: 100,
        padding: 3,
        borderBottom: "1px solid #ff4500",
      }}
    >
      <Grid container spacing={2}>
        <Grid item lg={3} md={4} xs={12}>
          <Box>
            <Typography variant="h6" color="#ff4500">
              Quick Links
            </Typography>
          </Box>
          <Divider />
          <Box>
            <Box sx={{ display: "flex", flexDirection: "column" }}>
              <Typography>
                <b>Home</b>
              </Typography>
              <Typography>
                <b>Products</b>
              </Typography>
              <Typography>
                <b>About</b>
              </Typography>
              <Typography>
                <b>Contact Us</b>
              </Typography>
            </Box>
          </Box>
        </Grid>
        <Grid item lg={3} md={4} xs={12}>
          <Box>
            <Typography variant="h6" color="#ff4500">
              Contact us
            </Typography>
          </Box>
          <Divider />
          <Box>
            <Typography>Phone: +254 7</Typography>
            <Typography>Email: maxlight@gmail.com</Typography>
          </Box>
        </Grid>
        <Grid item lg={3} md={4} xs={12}>
          <Box>
            <Typography variant="h6" color="#ff4500">
              We Are Located at:
            </Typography>
          </Box>
          <Divider />
          <Box>
            <Typography>
              Ruiru: Eastern Bypass Capital One Bld near Quick Mart
            </Typography>
          </Box>
        </Grid>
      </Grid>
      <Box sx={{ display: "flex", margin: "30px 2px 0px 4px" }}>
        <Box>
          <IconButton>
            <InstagramIcon />
          </IconButton>
        </Box>
        <Box sx={{ display: "flex" }}>
          <IconButton>
            {" "}
            <FacebookOutlinedIcon />
          </IconButton>
        </Box>
        <Box sx={{ display: "flex" }}>
          <IconButton>
            {" "}
            <TwitterIcon />
          </IconButton>
        </Box>
      </Box>
    </Box>
  );
}

export default Footer;
