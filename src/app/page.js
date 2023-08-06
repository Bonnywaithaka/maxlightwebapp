import { Box, Typography } from "@mui/material";
import Products from "./components/products/Products";

export default function Home() {
  return (
    <Box>
      <Typography>MaxLight Electronics</Typography>
      <Products />
    </Box>
  );
}
