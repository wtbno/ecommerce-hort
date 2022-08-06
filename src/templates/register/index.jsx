import React from "react";
import { Box, Button, Grid, ImageList, TextField } from "@mui/material";


export default function Register() {
  return (
    <Grid
      sx={{
        width: "100%",
        height: "100vh",
        backgroundColor: "#eff5ea",
      }}
    >
      <Box
        sx={{
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          marginTop: "50px",
        }}
      >
        <Box
          sx={{
            border: "solid 1px green",
            width: "30%",
            height: "70vh",
            display: "flex",
            alignItems: "center",
            justifyContent: "space-evenly",
            flexDirection: "column",
            borderRadius: "10px",
            marginTop:'50px'
          }}
        >
          Por favor, preencha os campos abaixo <img src="/grape.png" />
          <TextField id="outlined-basic" label="Nome completo" variant="outlined" />
          <TextField id="outlined-basic" label="Email" variant="outlined" />
          <TextField id="outlined-basic" label="Senha" variant="outlined" />
          
          <Button href="./login">Salvar</Button>
        </Box>
      </Box>
    </Grid>
  );
}
