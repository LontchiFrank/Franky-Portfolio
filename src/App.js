import React from "react";
import {
  AppBar,
  Toolbar,
  IconButton,
  Typography,
  Stack,
  Button,
} from "@mui/material";
import CatchingPokemonIcon from "@mui/icons-material/CatchingPokemon";
import "./App.css";
import Landing from "./Pages/Landing/Landing.screen";

function App() {
  React.createElement(Landing);
  return (
    <div style={{ width: "100%", height: "100vh" }}>
      <AppBar style={{ backgroundColor: "black" }}>
        <Toolbar style={{ paddingRight: "22px !important" }}>
          <IconButton size="large" edge="start">
            <CatchingPokemonIcon />
          </IconButton>
          <Typography
            variant="h6"
            className="font"
            component="div"
            sx={{ flexGrow: 1 }}
          >
            Frank
          </Typography>
          <Stack direction="row" spacing={2}>
            <Button color="inherit">Feaatures</Button>
            <Button color="inherit">Pricing</Button>
            <Button color="inherit">About</Button>
            <Button color="inherit">Login</Button>
            <Button color="inherit">Register</Button>
          </Stack>
        </Toolbar>
      </AppBar>
      <Landing />
    </div>
  );
}

export default App;
