import React from "react";
import { Box, Button, Grid, ImageList } from "@mui/material";
import NavBar from "../../components/Navbar";
import { width } from "@mui/system";

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
          border: "solid 2px #5fd",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
        }}
      >
        <ImageList>
          <Button sx={{ display: "flex", flexDirection: "column" }}>
            <img
              style={{ borderRadius: "15px", height: "130px", width: "200px" }}
              src="./pokan.jpg"
            />
            Adicionar ao carrinho
          </Button>
          <Button sx={{ display: "flex", flexDirection: "column" }}>
            <img
              style={{ borderRadius: "15px", height: "130px", width: "200px" }}
              src="./pessegos.jpg"
            />
            Adicionar ao carrinho
          </Button>
          <Button sx={{ display: "flex", flexDirection: "column" }}>
            <img
              style={{ borderRadius: "15px", height: "130px", width: "200px" }}
              src="./bananas.jpg"
            />
            Adicionar ao carrinho
          </Button>
          <Button sx={{ display: "flex", flexDirection: "column" }}>
            <img
              style={{ borderRadius: "15px", height: "130px", width: "200px" }}
              src="./bananas.jpg"
            />
            Adicionar ao carrinho
          </Button>
          <Button sx={{ display: "flex", flexDirection: "column" }}>
            <img
              style={{ borderRadius: "15px", height: "130px", width: "200px" }}
              src="./bananas.jpg"
            />
            Adicionar ao carrinho
          </Button>
          <Button sx={{ display: "flex", flexDirection: "column" }}>
            <img
              style={{ borderRadius: "15px", height: "130px", width: "200px" }}
              src="./bananas.jpg"
            />
            Adicionar ao carrinho
          </Button>
        </ImageList>
      </Box>
    </Grid>
  );
}
