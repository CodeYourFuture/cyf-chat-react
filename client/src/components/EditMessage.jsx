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
import ExpandMoreIcon from "@material-ui/icons/ExpandMore";
import { mdiMenu } from "@mdi/js";
import Icon from "@mdi/react";
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

const EditMessage = () => {
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
          <ListItem button>Edit message2</ListItem>
          <ListItem button>Delete message</ListItem>
        </List>
      </Collapse>
    </Box>
  );
};

export default EditMessage;
