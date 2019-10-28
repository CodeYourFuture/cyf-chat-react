import React, { Component } from "react";
import { Grid, Box } from "@material-ui/core";
import { makeStyles } from "@material-ui/core/styles";
import Message from "./Message";
import List from "@material-ui/core/List";
import ScrollToBottom from "react-scroll-to-bottom";

const Messages = ({ messages, name, onDelete, onEdit, isEditing }) => {
  const useStyles = makeStyles({
    root: {
      backgroundColor: "#404346",
      color: "white",
      overflow: "auto",
      height: "100%"
    },
    messageBox: { alignItems: "flex-end" }
  });

  const classes = useStyles();
  return (
    <ScrollToBottom className={classes.root}>
      <List>
        {messages.map((message, i) => {
          return (
            <Box
              key={message._id ? message._id : i}
              className={classes.messageBox}
            >
              <Message
                message={message.message}
                avatar={message.avatar}
                name={message.name}
                date={message.date}
                id={message._id}
                thereIsId={message._id ? true : false}
                onDelete={onDelete}
                onEdit={onEdit}
              />
            </Box>
          );
        })}
      </List>
    </ScrollToBottom>
  );
};

export default Messages;
