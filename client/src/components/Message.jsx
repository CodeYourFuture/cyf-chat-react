import React, { Component } from "react";
import {
  Avatar,
  Box,
  ListItem,
  ListItemAvatar,
  ListItemText,
  IconButton,
  Typography
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

const Message = ({ message, name, date, avatar, onDelete, onEdit }) => {
  const classes = useStyles();

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
              <Typography
                component="span"
                variant="body2"
                className={classes.whiteText}
              >
                {message}
              </Typography>
            </React.Fragment>
          }
        />
        <Box>
          <EditMessage onDelete={onDelete} onEdit={onEdit}></EditMessage>
        </Box>
      </ListItem>
    </React.Fragment>
  );
};

export default Message;
