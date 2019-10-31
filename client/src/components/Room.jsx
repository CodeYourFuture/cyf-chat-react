import React from "react";
import ListItem from "@material-ui/core/ListItem";
import { makeStyles } from "@material-ui/core/styles";
import ListItemAvatar from "@material-ui/core/ListItemAvatar";
import ListItemText from "@material-ui/core/ListItemText";
import { Box, Avatar } from "@material-ui/core";
import images from "../helpers/Images";

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
  },
  avatarMini: {
    width: "25px",
    height: "25px"
  },
  avatarListMini: {
    minWidth: "0px"
  }
}));

const Room = ({
  roomName,
  users,
  index,
  currentRoom,
  selectedIndex,
  handleListItemClick
}) => {
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
      {roomName.toLowerCase() === currentRoom.toLowerCase() &&
        users.map(({ avatar, room }, i) => {
          console.log(room, currentRoom, "this is room and curr");
          return (
            room.toLowerCase() === currentRoom.toLowerCase() && (
              <ListItemAvatar className={classes.avatarListMini}>
                <Avatar className={classes.avatarMini} src={images[avatar]} />
              </ListItemAvatar>
            )
          );
        })}
    </ListItem>
  );
};

export default Room;
