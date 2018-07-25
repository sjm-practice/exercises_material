import React from "react";
import { AppBar, Toolbar, Typography } from "@material-ui/core";
import CreateDialog from "../exercises/dialogs/Create";

const Header = () => (
  <AppBar position="static">
    <Toolbar>
      <Typography variant="headline" color="inherit" style={{ flex: 1 }}>
        Exercise Database
      </Typography>
      <CreateDialog />
    </Toolbar>
  </AppBar>
);

export default Header;
