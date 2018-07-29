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
import ExerciseForm from "./ExerciseForm";

const styles = {
  Paper: {
    padding: 20,
    marginTop: 10,
    marginBottom: 10,
    height: 500,
    overflowY: "auto",
  },
};

const Exercises = ({
  muscles,
  exercises,
  category,
  editMode,
  onSelect,
  exercise, // ??? I don't get how this can be listed twice. maybe the second behaves like default.
  exercise: {
    id,
    title = "Welcome!",
    description = "Please select an exercise from the list on the left.",
  },
  onDelete,
  onSelectEdit,
  onEdit,
}) => (
  <Grid container>
    <Grid item sm>
      <Paper style={styles.Paper}>
        {exercises.map(
          ([group, exercises]) =>
            !category || category === group ? (
              <Fragment key={group}>
                <Typography
                  key={group}
                  variant="headline"
                  style={{ textTransform: "capitalize" }}
                >
                  {group}
                </Typography>
                <List component="ul">
                  {exercises.map(({ id, title }) => (
                    <ListItem key={id} button onClick={() => onSelect(id)}>
                      <ListItemText primary={title} />
                      <ListItemSecondaryAction>
                        <IconButton aria-label="Edit" onClick={() => onSelectEdit(id)}>
                          <EditIcon />
                        </IconButton>
                        <IconButton aria-label="Delete" onClick={() => onDelete(id)}>
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
    <Grid item sm>
      <Paper style={styles.Paper}>
        {editMode ? (
          <ExerciseForm muscles={muscles} onSubmit={onEdit} exercise={exercise} />
        ) : (
          <Fragment>
            <Typography variant="display1">{title}</Typography>
            <Typography variant="subheading" style={{ marginTop: 20 }}>
              {description}
            </Typography>
          </Fragment>
        )}
      </Paper>
    </Grid>
  </Grid>
);

export default Exercises;
