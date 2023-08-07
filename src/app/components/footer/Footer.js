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
        backgroundColor: "#ff4500",
        color: "#fff",
        marginTop: 10,
        minHeight: 100,
        padding: 3,
        border: "1px solid darkblue",
      }}
    >
      <Grid container spacing={2}>
        <Grid item lg={3} md={4} xs={12}>
          <Box>
            <Typography variant="h6">Social Links</Typography>
          </Box>
          <Divider />
          <Box>
            <Box sx={{ display: "flex" }}>
              <IconButton>
                {" "}
                <InstagramIcon />
              </IconButton>
              <Typography>Instagram</Typography>
            </Box>
            <Box sx={{ display: "flex" }}>
              <IconButton>
                {" "}
                <FacebookOutlinedIcon />
              </IconButton>
              <Typography>Facebook</Typography>
            </Box>
            <Box sx={{ display: "flex" }}>
              <IconButton>
                {" "}
                <TwitterIcon />
              </IconButton>
              <Typography>Twitter</Typography>
            </Box>
          </Box>
        </Grid>
        <Grid item lg={3} md={4} xs={12}>
          <Box>
            <Typography variant="h6">Contact Us</Typography>
          </Box>
          <Divider />
          <Box>
            <Typography>Phone: +254 759 575 534</Typography>
            <Typography>Email: rees@gmail.com</Typography>
          </Box>
        </Grid>
        <Grid item lg={3} md={4} xs={12}>
          <Box>
            <Typography variant="h6">We Are Located at:</Typography>
          </Box>
          <Divider />
          <Box>
            <Typography>Nakuru: Baraka plaza Ground Floor Rm 12</Typography>
            <Typography>Nairobi: Veteran House 1st Floor Rm 7</Typography>
          </Box>
        </Grid>
      </Grid>
    </Box>
  );
}

export default Footer;
