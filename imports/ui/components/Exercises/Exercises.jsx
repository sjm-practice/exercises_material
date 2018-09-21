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

const styles = theme => ({
  root: {
    flexGrow: 1,
  },
  paper: {
    padding: 20,
    marginTop: 5,
    height: 500,
    overflowY: "auto",
  },
});

const Exercises = ({
  muscles,
  exercises,
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
  <div className={classes.root}>
    <Grid container>
      <Grid item xs={12} sm={6}>
        <Paper className={classes.paper}>
          {exercises.map(
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
      <Grid item xs={12} sm={6}>
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
  </div>
);

export default withStyles(styles)(Exercises);
