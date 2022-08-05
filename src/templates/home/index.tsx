import React from "react";
import { Box, Button, Grid, ImageList } from "@mui/material";
import NavBar from "../../components/Navbar";

const productsBox = {};

export default function Home() {
  return (
    <Grid
      sx={{
        width: "100%",
        // height: "100vh",
        backgroundColor: "#b1ce9a",
      }}
    >
      <NavBar />
      <Box
        sx={{
          border: "solid 1px #5fd",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
        }}
      >
        <ImageList>
          <img src="./papaia.webp" />
          <img src="./papaia.webp" />
          <img src="./papaia.webp" />
          <img src="./papaia.webp" />
          <img src="./papaia.webp" />
          <img src="./papaia.webp" />
          <img src="./papaia.webp" />
          <img src="./papaia.webp" />
        </ImageList>
      </Box>
    </Grid>
  );
}
