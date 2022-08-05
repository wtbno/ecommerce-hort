import React from "react";
import { Box, Button, Grid, ImageList } from "@mui/material";
import NavBar from "../../components/Navbar";



export default function FruitsPage() {



  return (
    <Grid
      sx={{
        width: "100%",
        backgroundColor: "#eff5ea",
      }}
    >
      <NavBar />
      <Box
        sx={{
          display: "flex",
          alignItems: "center",
          justifyContent: "flex-start",
        }}
      >
        <Box>
          <Button  sx={{ display: "flex", flexDirection: "column" }}>
            <img
              style={{
                borderRadius: "15px",
                height: "130px",
                width: "200px",
                boxShadow: "0 5px 3px 2px rgba(0, 0, 0, 0.2)",
              }}
              src="./pokan.jpg"
            />
            Adicionar ao carrinho
          </Button>
          <Button sx={{ display: "flex", flexDirection: "column" }}>
            <img
              style={{
                borderRadius: "15px",
                height: "130px",
                width: "200px",
                boxShadow: "0 5px 3px 2px rgba(0, 0, 0, 0.2)",
              }}
              src="./pessegos.jpg"
            />
            Adicionar ao carrinho
          </Button>
        
          <Button sx={{ display: "flex", flexDirection: "column" }}>
            <img
              style={{
                borderRadius: "15px",
                height: "130px",
                width: "200px",
                boxShadow: "0 5px 3px 2px rgba(0, 0, 0, 0.2)",
              }}
              src="./bananas.jpg"
            />
            Adicionar ao carrinho
          </Button>
          <Button sx={{ display: "flex", flexDirection: "column" }}>
            <img
              style={{
                borderRadius: "15px",
                height: "130px",
                width: "200px",
                boxShadow: "0 5px 3px 2px rgba(0, 0, 0, 0.2)",
              }}
              src="./laranjas.jpg"
            />
            Adicionar ao carrinho
          </Button>

          </Box>
          <Box>
          <Button sx={{ display: "flex", flexDirection: "column" }}>
            <img
            alt="Mamão papaia"
              style={{
                borderRadius: "15px",
                height: "130px",
                width: "200px",
                boxShadow: "0 5px 3px 2px rgba(0, 0, 0, 0.2)",
              }}
              src="./papaia.jpg"
            />
            Adicionar ao carrinho
          </Button>
          <Button sx={{ display: "flex", flexDirection: "column" }}>
            <img
              style={{
                borderRadius: "15px",
                height: "130px",
                width: "200px",
                boxShadow: "0 5px 3px 2px rgba(0, 0, 0, 0.2)",
              }}
              src="./couvem.webp"
            />
            Adicionar ao carrinho
          </Button>
          <Button sx={{ display: "flex", flexDirection: "column" }}>
            <img
              style={{
                borderRadius: "15px",
                height: "130px",
                width: "200px",
                boxShadow: "0 5px 3px 2px rgba(0, 0, 0, 0.2)",
              }}
              src="./repolhoroxo.jpg"
            />
            Adicionar ao carrinho
          </Button>
          <Button sx={{ display: "flex", flexDirection: "column" }}>
            <img
              style={{
                borderRadius: "15px",
                height: "130px",
                width: "200px",
                boxShadow: "0 5px 3px 2px rgba(0, 0, 0, 0.2)",
              }}
              src="./repolhoroxo.jpg"
            />
            Adicionar ao carrinho
          </Button>
        </Box>
      </Box>
    </Grid>
  );
}
