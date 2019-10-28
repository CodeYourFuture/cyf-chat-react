import React, { useState } from "react";
import {
  Avatar,
  Box,
  ListItem,
  List,
  ListItemAvatar,
  ListItemText,
  IconButton,
  Typography,
  Collapse
} from "@material-ui/core";
import DeleteIcon from "@material-ui/icons/Delete";
import { mdiMenu } from "@mdi/js";
import Icon from "@mdi/react";
import EditIcon from "@material-ui/icons/Edit";
import clsx from "clsx";
import { makeStyles } from "@material-ui/core/styles";

const useStyles = makeStyles(theme => ({
  expand: {
    transform: "rotate(0deg)",
    marginLeft: "auto",
    transition: theme.transitions.create("transform", {
      duration: theme.transitions.duration.shortest
    })
  },
  expandOpen: {
    transform: "rotate(180deg)"
  }
}));

const EditMessage = ({ onDelete, onEdit, id, thereIsId }) => {
  const classes = useStyles();
  const [expanded, setExpanded] = useState(false);

  const handleExpandClick = () => {
    setExpanded(!expanded);
  };
  return (
    <Box>
      <IconButton
        className={clsx(classes.expand, {
          [classes.expandOpen]: expanded
        })}
        onClick={handleExpandClick}
        aria-expanded={expanded}
        aria-label="show more"
      >
        <Icon path={mdiMenu} title="Menu" size={1} color="white" />
      </IconButton>
      <Collapse in={expanded} timeout="auto" unmountOnExit>
        <List>
          <ListItem
            button
            onClick={e => {
              e.preventDefault();
              onDelete(id);
            }}
          >
            <DeleteIcon color="secondary" />
            <Typography component="span" className="pl-3" variant="body2">
              Delete
            </Typography>
          </ListItem>
          <ListItem button onClick={onEdit}>
            <EditIcon color="primary" />
            <Typography component="span" className="pl-3" variant="body2">
              Edit
            </Typography>
          </ListItem>
        </List>
      </Collapse>
    </Box>
  );
};

export default EditMessage;
