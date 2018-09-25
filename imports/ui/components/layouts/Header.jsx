import React from "react";
import { AppBar, Toolbar, Typography } from "@material-ui/core";
import { withStyles } from "@material-ui/core/styles";
import CreateDialog from "../exercises/CreateDialog";

const styles = {
  flex: {
    flex: 1,
  },
};

const Header = ({ classes }) => (
  <AppBar position="static">
    <Toolbar>
      <Typography variant="headline" color="inherit" className={classes.flex}>
        Exercise Database
      </Typography>
      <CreateDialog />
    </Toolbar>
  </AppBar>
);

export default withStyles(styles)(Header);
