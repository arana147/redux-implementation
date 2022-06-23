import { Button, Grid, Paper, Typography } from "@mui/material";
import { Box } from "@mui/system";

export const ProductItem = (props: any) => {
  const IMAGE_URL = "https://picsum.photos/200/300";
  return (
    <Grid item p={0} xs={12} sm={6} md={4} lg={3} textAlign={"center"}>
      <Paper sx={{ paddingBottom: "8px" }} elevation={3}>
        <img
          src={IMAGE_URL}
          style={{ objectFit: "cover" }}
          width={"100%"}
          height={200}
        />

        <Button variant="contained" sx={{ marginTop: "8px", width: "90%" }}>
          + Add To Cart
        </Button>
      </Paper>
    </Grid>
  );
};
