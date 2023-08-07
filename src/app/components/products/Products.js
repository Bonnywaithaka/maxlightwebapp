"use client";
import { Box, Grid, Typography, styled } from "@mui/material";
import Image from "next/image";
import React from "react";
import Product from "./Product";

const StyledGrid = styled(Grid)(({ theme }) => ({
  [theme.breakpoints.down("md")]: {
    display: "flex",
    justifyContent: "center",
  },
}));

function Products() {
  let items = [
    {
      id: 1,
      name: "506-800 Chandellier",
      image: "/assets/chandelier.jpg",
      price: "5,000",
      description: "Home style decor.",
    },
    {
      id: 2,
      name: "506-800 Chandellier",
      image: "/assets/chandelier.jpg",
      price: "5,000",
      description: "Home style decor.",
    },
    {
      id: 3,
      name: "506-800 Chandellier",
      image: "/assets/bthairu.png",
      price: "5,000",
      description: "Home style decor.",
    },
    {
      id: 4,
      name: "506-800 Chandellier",
      image: "/assets/cat.jpg",
      price: "5,000",
      description: "Home style decor.",
    },
    {
      id: 5,
      name: "506-800 Chandellier",
      image: "/assets/bthairu.png",
      price: "5,000",
      description: "Home style decor.",
    },
  ];
  return (
    <Box>
      <StyledGrid container spacing={2}>
        {items.map((item) => (
          <Grid item key={item.id} sx={1} md={4} lg={3}>
            <Product
              name={item.name}
              price={item.price}
              description={item.description}
              image={item.image}
            />
          </Grid>
        ))}
      </StyledGrid>
    </Box>
  );
}

export default Products;
