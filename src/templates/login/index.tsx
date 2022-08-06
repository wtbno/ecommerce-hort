import React from "react";
import { Box, Button, Grid, ImageList, TextField } from "@mui/material";
import NavBar from "../../components/Navbar";

export default function Home() {
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

        }}
      >
        <Box
          sx={{
            border: "solid 1px green",
            width: "30%",
            height: "60vh",
            display: "flex",
            alignItems: "center",
            justifyContent: "space-evenly",
            flexDirection: "column",
            borderRadius:'10px',
            marginTop: "50px",
          }}
        >Bem vinda (o) novamente! <img src="/fruits.png"/>
          <TextField id="outlined-basic" label="Email" variant="outlined" />
          <TextField id="outlined-basic" label="Senha" variant="outlined" />
          <Button  href="./fruits">Entrar</Button>
          <Button href="./register">Cadastrar-se</Button>
        </Box>
      </Box>
    </Grid>
  );
}
