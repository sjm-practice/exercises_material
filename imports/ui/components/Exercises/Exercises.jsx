import React from "react";
import Grid from "@material-ui/core/Grid";
import Paper from "@material-ui/core/Paper";

const styles = {
  Paper: { padding: 20, marginTop: 10, marginBottom: 10 },
};

const Exercises = () => (
  <Grid container>
    <Grid item sm>
      <Paper styles={styles.Paper}>Left Pane</Paper>
    </Grid>
    <Grid item sm>
      <Paper styles={styles.Paper}>Rigth Pane</Paper>
    </Grid>
  </Grid>
);

export default Exercises;
