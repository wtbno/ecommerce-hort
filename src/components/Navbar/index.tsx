import React from "react";
import { Button, Grid, Box, ButtonGroup } from "@mui/material";

export default function NavBar() {
  return (
    <Grid
      sx={{
       
        height: "10vh",
        display: "flex",
        width: "100%",
        backgroundColor: "#fff",
        flexDirection: "row-reverse",
      }}
    >
      
      <ButtonGroup
      variant="text" aria-label="text button group"
        sx={{
          width: "85%",
          display: "flex",
          justifyContent: "end",

          alignItems: "center",
        }}
      >
        <Button size="small" variant="text">
         Meus Pedidos <img width="20%" src="./carrinho.png" />
        </Button>
        
        <Button size="small" variant="text">
          Frutas <img width="20%" src="./fruits.png" />
        </Button>
        <Button size="small" variant="text">
          Verduras e legumes <img width="17%" src="./verduras.png" />
        </Button>

        <Button size="small" variant="text">
          Sobre <img width="20%" src="./farm.png" />
        </Button>
        </ButtonGroup>
    </Grid>
  );
}
