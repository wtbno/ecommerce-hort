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
              style={{ borderRadius: "15px", height: "130px", width: "200px",  boxShadow: "0 -1px 8px 1px rgba(0, 0, 0, 0.2)" }}
              src="./pokan.jpg"
            />
            Adicionar ao carrinho
          </Button>
          <Button sx={{ display: "flex", flexDirection: "column" }}>
            <img
              style={{ borderRadius: "15px", height: "130px", width: "200px",  boxShadow: "0 -1px 8px 1px rgba(0, 0, 0, 0.2)" }}
              src="./pessegos.jpg"
            />
            Adicionar ao carrinho
          </Button>
          <Button sx={{ display: "flex", flexDirection: "column" }}>
            <img
              style={{ borderRadius: "15px", height: "130px", width: "200px",  boxShadow: "0 -1px 8px 1px rgba(0, 0, 0, 0.2)" }}
              src="./bananas.jpg"
            />
            Adicionar ao carrinho
          </Button>
          <Button sx={{ display: "flex", flexDirection: "column" }}>
            <img
              style={{ borderRadius: "15px", height: "130px", width: "200px",  boxShadow: "0 -1px 8px 1px rgba(0, 0, 0, 0.2)" }}
              src="./laranjas.jpg"
            />
            Adicionar ao carrinho
          </Button>
          <Button sx={{ display: "flex", flexDirection: "column" }}>
            <img
              style={{ borderRadius: "15px", height: "130px", width: "200px",  boxShadow: "0 -1px 8px 1px rgba(0, 0, 0, 0.2)" }}
              src="./papaia.jpg"
            />
            Adicionar ao carrinho
          </Button>
          <Button sx={{ display: "flex", flexDirection: "column" }}>
            <img
              style={{ borderRadius: "15px", height: "130px", width: "200px",  boxShadow: "0 -1px 8px 1px rgba(0, 0, 0, 0.2)" }}
              src="./couvem.webp"
            />
            Adicionar ao carrinho
          </Button>
          <Button sx={{ display: "flex", flexDirection: "column" }}>
            <img
              style={{ borderRadius: "15px", height: "130px", width: "200px",  boxShadow: "0 -1px 8px 1px rgba(0, 0, 0, 0.2)" }}
              src="./repolhoroxo.jpg"
            />
            Adicionar ao carrinho
          </Button>
          <Button sx={{ display: "flex", flexDirection: "column" }}>
            <img
              style={{ borderRadius: "15px", height: "130px", width: "200px",  boxShadow: "0 -1px 8px 1px rgba(0, 0, 0, 0.2)" }}
              src="./repolhoroxo.jpg"
            />
            Adicionar ao carrinho
          </Button>
        </ImageList>
      </Box>
    </Grid>
  );
}
