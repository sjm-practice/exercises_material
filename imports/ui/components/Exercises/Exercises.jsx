import React, { Fragment } from "react";
import Grid from "@material-ui/core/Grid";
import Paper from "@material-ui/core/Paper";
import Typography from "@material-ui/core/Typography";
import IconButton from "@material-ui/core/IconButton";
import List from "@material-ui/core/List";
import ListItem from "@material-ui/core/ListItem";
import ListItemText from "@material-ui/core/ListItemText";
import ListItemSecondaryAction from "@material-ui/core/ListItemSecondaryAction";
import DeleteIcon from "@material-ui/icons/Delete";
import EditIcon from "@material-ui/icons/Edit";
import { withStyles } from "@material-ui/core/styles";
import ExerciseForm from "./ExerciseForm";
import { withContext } from "../../../context";

const styles = theme => ({
  "@global": {
    // note, this can be done from any styles class (prob more appropriate in main.jsx)
    "html, body, #render-target": {
      height: "100%",
    },
  },
  paper: {
    padding: theme.spacing.unit * 2,
    overflowY: "auto",
    [theme.breakpoints.up("sm")]: {
      marginTop: 5,
      height: "calc(100% - 5px - 5px)", // each -5px accounts for a margin below header and above footer
    },
    [theme.breakpoints.down("xs")]: {
      height: "100%",
    },
  },
  container: {
    [theme.breakpoints.up("sm")]: {
      height: "calc(100% - 64px - 48px)",
    },
    [theme.breakpoints.up("xs")]: {
      height: "calc(100% - 56px - 48px)",
    },
  },
  item: {
    [theme.breakpoints.down("xs")]: {
      height: "50%",
    },
  },
});

const Exercises = ({
  muscles,
  exercisesByMuscles,
  category,
  editMode,
  onSelect,
  exercise, // ??? I don't get how this can be listed twice. maybe the second behaves like default.
  exercise: {
    id, // by passing id as a prop to key, it will trigger a render again
    title = "Welcome!",
    description = "Please select an exercise from the list on the left.",
  },
  onDelete,
  onSelectEdit,
  onEdit,
  classes,
}) => (
  <Grid container className={classes.container}>
    <Grid item className={classes.item} xs={12} sm={6}>
      <Paper className={classes.paper}>
        {exercisesByMuscles.map(
          ([group, exercises]) =>
            !category || category === group ? (
              <Fragment key={group}>
                <Typography
                  key={group}
                  variant="headline"
                  style={{ textTransform: "capitalize" }}
                  color="secondary"
                >
                  {group}
                </Typography>
                <List component="ul">
                  {exercises.map(({ id, title }) => (
                    <ListItem key={id} button onClick={() => onSelect(id)}>
                      <ListItemText primary={title} />
                      <ListItemSecondaryAction>
                        <IconButton
                          color="primary"
                          aria-label="Edit"
                          onClick={() => onSelectEdit(id)}
                        >
                          <EditIcon />
                        </IconButton>
                        <IconButton
                          color="primary"
                          aria-label="Delete"
                          onClick={() => onDelete(id)}
                        >
                          <DeleteIcon />
                        </IconButton>
                      </ListItemSecondaryAction>
                    </ListItem>
                  ))}
                </List>
              </Fragment>
            ) : null,
        )}
      </Paper>
    </Grid>
    <Grid item className={classes.item} xs={12} sm={6}>
      <Paper className={classes.paper}>
        <Typography variant="display1" gutterBottom color="secondary">
          {title}
        </Typography>
        {editMode ? (
          <ExerciseForm
            key={id}
            muscles={muscles}
            onSubmit={onEdit}
            exercise={exercise}
          />
        ) : (
          <Typography variant="subheading">{description}</Typography>
        )}
      </Paper>
    </Grid>
  </Grid>
);

export default withContext(withStyles(styles)(Exercises));
