import React from "react";
import { Button, Grid, Box } from "@mui/material";

export default function NavBar() {
  return (
    <Grid
      sx={{
        border: "solid 1px #81cc55",
        height: "10vh",
        display: "flex",
        backgroundColor: "#fff",
        flexDirection: "row-reverse",
      }}
    >
      <Box
        sx={{
          width: "85%",
          display: "flex",
          justifyContent: "space-evenly",
          border: "solid 1px red",
          alignItems: "center",
        }}
      >
        <Button size="small" variant="outlined">
          Pedidos <img width="20%" src="./carrinho.png" />
        </Button>
        <Button size="small" variant="outlined">
          Produtos <img width="17%" src="./fruits.png" />
        </Button>

        <Button size="small" variant="outlined">
          Sobre <img width="20%" src="./farm.png" />
        </Button>
      </Box>
    </Grid>
  );
}
