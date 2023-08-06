import { Box, Grid, Typography } from "@mui/material";
import Image from "next/image";
import React from "react";
import Product from "./Product";

function Products() {
  let items = [
    {
      id: 1,
      name: "506-800 Chandellier",
      image: "/public/me.png",
      price: "5,000",
      description: "Home style decor.",
    },
    {
      id: 2,
      name: "506-800 Chandellier",
      image: "/public/me.png",
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
      <Grid container spacing={2}>
        {items.map((item) => (
          <Grid item key={item.id}>
            <Product
              name={item.name}
              price={item.price}
              description={item.description}
              image={item.image}
            />
          </Grid>
        ))}
      </Grid>
    </Box>
  );
}

export default Products;
