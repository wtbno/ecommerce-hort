import React from "react";
import { Box, Grid } from "@mui/material";
import NavBar from "../../components/Navbar";

const productsBox = {};

export default function Home() {
  return (
    <Grid
      sx={{
       
        width: "100%",
        height: "100vh",
        backgroundColor: "#b1ce9a",
      }}
    >
      <NavBar />
      <Box
        sx={{
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          border: "1px solid green",
          width: "50%",
          height: "70vh",
    
        }}
      >
        <Box
          sx={{ border: "1px solid green", width: "40%", height: "50vh" }}
        ></Box>
        <Box
          sx={{ border: "1px solid green", width: "40%", height: "50vh" }}
        ></Box>
        <Box
          sx={{ border: "1px solid green", width: "40%", height: "50vh" }}
        ></Box>
      </Box>
    </Grid>
  );
}
