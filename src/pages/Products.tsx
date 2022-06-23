import { Button, Grid, Paper, Typography } from "@mui/material";
import { Box } from "@mui/system";
import { ProductItem } from "../components/ProductItem";

export const Products = () => {
  const ProductList = [1, 2, 3, 4];
  return (
    <Box>
      <h2>Products Page</h2>
      <Grid container alignItems={"center"} spacing={2}>
        {ProductList.map((data) => {
          return <ProductItem />;
        })}
      </Grid>
    </Box>
  );
};
