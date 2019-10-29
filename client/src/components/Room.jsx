import React from "react";
import ListItem from "@material-ui/core/ListItem";
import { makeStyles } from "@material-ui/core/styles";
import ListItemAvatar from "@material-ui/core/ListItemAvatar";
import ListItemText from "@material-ui/core/ListItemText";
import { Box } from "@material-ui/core";

const useStyles = makeStyles(theme => ({
  root: {
    width: "100%",
    maxWidth: 360,
    backgroundColor: theme.palette.background.paper
  },
  roomsXS: {
    [theme.breakpoints.down("xs")]: {
      justifyContent: "center"
    }
  }
}));

const Room = ({ roomName, index, selectedIndex, handleListItemClick }) => {
  const classes = useStyles();

  return (
    <ListItem
      button
      className={classes.roomsXS}
      selected={selectedIndex === index}
      onClick={event => handleListItemClick(event, index)}
    >
      <Box>
        <ListItemText>{roomName}</ListItemText>
      </Box>
    </ListItem>
  );
};

export default Room;
