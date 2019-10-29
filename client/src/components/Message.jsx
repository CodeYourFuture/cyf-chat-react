import React, { useState } from "react";
import {
  Avatar,
  Box,
  ListItem,
  ListItemAvatar,
  ListItemText,
  IconButton,
  Typography,
  TextField
} from "@material-ui/core";
import EditMessage from "../components/EditMessage";
import images from "../helpers/Images";
import Moment from "react-moment";

import { makeStyles } from "@material-ui/core/styles";

const useStyles = makeStyles(theme => ({
  whiteText: {
    color: "white !important"
  },
  date: {
    color: "grey !important",
    fontSize: 12 + "px !important"
  },
  menuRight: {
    textAlign: "right"
  }
}));

const calendarStrings = {
  lastDay: "[Yesterday at] LT",
  sameDay: "[Today at] LT",
  nextDay: "[Tomorrow at] LT",
  lastWeek: "[last] dddd [at] LT",
  nextWeek: "dddd [at] LT",
  sameElse: "L"
};

const Message = ({ message, name, date, avatar, onDelete, onEdit, id }) => {
  const classes = useStyles();
  const [isEditing, setIsEditing] = useState(false);
  const [editedMessage, setEditedMessage] = useState(message);

  const handleChange = e => {
    e.preventDefault();
    setEditedMessage(e.target.value);
  };

  const editMessage = e => {
    e.preventDefault();
    setIsEditing(true);
  };

  const sendEditMessage = e => {
    e.preventDefault();
    onEdit(id, editedMessage);
    setIsEditing(false);
  };

  return (
    <React.Fragment>
      <ListItem alignItems="flex-start">
        <ListItemAvatar>
          <Avatar src={images[avatar]} />
        </ListItemAvatar>

        <ListItemText
          primary={
            <React.Fragment>
              {name + " "}
              <Moment calendar={calendarStrings} className={classes.date}>
                {date}
              </Moment>
            </React.Fragment>
          }
          secondary={
            <React.Fragment>
              {isEditing ? (
                <TextField
                  id="standard-name"
                  value={editedMessage}
                  onChange={e => handleChange(e)}
                  margin="normal"
                  onKeyPress={ev =>
                    ev.key === "Enter" ? sendEditMessage(ev) : null
                  }
                />
              ) : (
                <Typography
                  component="span"
                  variant="body2"
                  className={classes.whiteText}
                >
                  {message}
                </Typography>
              )}
            </React.Fragment>
          }
        />

        {name !== "Admin" && (
          <Box className={classes.menuRight}>
            <EditMessage onDelete={onDelete} onEdit={editMessage} id={id} />
          </Box>
        )}
      </ListItem>
    </React.Fragment>
  );
};

export default Message;
