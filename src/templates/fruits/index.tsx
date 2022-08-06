import React from "react";
import { Box, Button, Grid, IconButton, ImageList } from "@mui/material";
import NavBar from "../../components/Navbar";
import HelpIcon from "@mui/icons-material/Help";

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
          width: "100%",
          borderRadius: "10px",
          alignItems: "center",
          justifyContent: "space-evenly",
        }}
      >
        <Box
          sx={{
            display: "flex",
            flexDirection: "column",
            borderRadius: "10px",
            alignItems: "center",
            justifyContent: "center",
            width: "250px",
            height: "300px",
            boxShadow: "0 5px 3px 2px rgba(0, 0, 0, 0.2)",
          }}
        > Mexirica Pokan
          <img
            style={{
              borderRadius: "15px",
              height: "130px",
              width: "200px",
              boxShadow: "0 5px 3px 2px rgba(0, 0, 0, 0.2)",
            }}
            src="./pokan.jpg"
          />
          <Button size="small">Adicionar</Button>
          <IconButton>
            <HelpIcon />
          </IconButton>
        </Box>
        <Box sx={{          display: "flex",
            flexDirection: "column",
            borderRadius: "10px",
            alignItems: "center",
            justifyContent: "center",
            width: "250px",
            height: "300px",
            boxShadow: "0 5px 3px 2px rgba(0, 0, 0, 0.2)", }}>
          <img
            style={{
              borderRadius: "15px",
              height: "130px",
              width: "200px",
              boxShadow: "0 5px 3px 2px rgba(0, 0, 0, 0.2)",
            }}
            src="./pessegos.jpg"
          />
          <Button size="small">Adicionar</Button>
          <IconButton>
            <HelpIcon />
          </IconButton>
        </Box>

        <Box sx={{          display: "flex",
            flexDirection: "column",
            borderRadius: "10px",
            alignItems: "center",
            justifyContent: "center",
            width: "250px",
            height: "300px",
            boxShadow: "0 5px 3px 2px rgba(0, 0, 0, 0.2)", }}>
          <img
            style={{
              borderRadius: "15px",
              height: "130px",
              width: "200px",
              boxShadow: "0 5px 3px 2px rgba(0, 0, 0, 0.2)",
            }}
            src="./bananas.jpg"
          />
          <Button size="small">Adicionar</Button>
          <IconButton>
            <HelpIcon />
          </IconButton>
        </Box>
        <Box sx={{          display: "flex",
            flexDirection: "column",
            borderRadius: "10px",
            alignItems: "center",
            justifyContent: "center",
            width: "250px",
            height: "300px",
            boxShadow: "0 5px 3px 2px rgba(0, 0, 0, 0.2)", }}>
          <img
            style={{
              borderRadius: "15px",
              height: "130px",
              width: "200px",
              boxShadow: "0 5px 3px 2px rgba(0, 0, 0, 0.2)",
            }}
            src="./laranjas.jpg"
          />
          <Button size="small">Adicionar</Button>
          <IconButton>
            <HelpIcon />
          </IconButton>
        </Box>
      </Box>
      <Box
        sx={{
          display: "flex",
          width: "100%",

         
          borderRadius: "10px",
          alignItems: "center",
          justifyContent: "space-evenly",
          marginTop: "100px",
        }}
      >
        <Box
          sx={{
            display: "flex",
            flexDirection: "column",
            borderRadius: "10px",
            alignItems: "center",
            justifyContent: "center",
            width: "250px",
            height: "300px",
            boxShadow: "0 5px 3px 2px rgba(0, 0, 0, 0.2)",
          }}
        >
          <img
            style={{
              borderRadius: "15px",
              height: "130px",
              width: "200px",
              boxShadow: "0 5px 3px 2px rgba(0, 0, 0, 0.2)",
            }}
            src="./pokan.jpg"
          />
          <Button size="small">Adicionar</Button>
          <IconButton>
            <HelpIcon />
          </IconButton>
        </Box>
        <Box sx={{          display: "flex",
            flexDirection: "column",
            borderRadius: "10px",
            alignItems: "center",
            justifyContent: "center",
            width: "250px",
            height: "300px",
            boxShadow: "0 5px 3px 2px rgba(0, 0, 0, 0.2)", }}>
          <img
            style={{
              borderRadius: "15px",
              height: "130px",
              width: "200px",
              boxShadow: "0 5px 3px 2px rgba(0, 0, 0, 0.2)",
            }}
            src="./pessegos.jpg"
          />
          <Button size="small">Adicionar</Button>
          <IconButton>
            <HelpIcon />
          </IconButton>
        </Box>

        <Box sx={{          display: "flex",
            flexDirection: "column",
            borderRadius: "10px",
            alignItems: "center",
            justifyContent: "center",
            width: "250px",
            height: "300px",
            boxShadow: "0 5px 3px 2px rgba(0, 0, 0, 0.2)", }}>
          <img
            style={{
              borderRadius: "15px",
              height: "130px",
              width: "200px",
              boxShadow: "0 5px 3px 2px rgba(0, 0, 0, 0.2)",
            }}
            src="./bananas.jpg"
          />
          <Button size="small">Adicionar</Button>
          <IconButton>
            <HelpIcon />
          </IconButton>
        </Box>
        <Box sx={{          display: "flex",
            flexDirection: "column",
            borderRadius: "10px",
            alignItems: "center",
            justifyContent: "center",
            width: "250px",
            height: "300px",
            boxShadow: "0 5px 3px 2px rgba(0, 0, 0, 0.2)", }}>
          <img
            style={{
              borderRadius: "15px",
              height: "130px",
              width: "200px",
              boxShadow: "0 5px 3px 2px rgba(0, 0, 0, 0.2)",
            }}
            src="./laranjas.jpg"
          />
          <Button size="small">Adicionar</Button>
          <IconButton>
            <HelpIcon />
          </IconButton>
        </Box>
      </Box>
    </Grid>
  );
}
