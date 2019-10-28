import React, { Component } from "react";
import { makeStyles } from "@material-ui/core/styles";
import Button from "@material-ui/core/Button";
import Icon from "@material-ui/core/Icon";
import TextField from "@material-ui/core/TextField";
import Box from "@material-ui/core/Box";
import Grid from "@material-ui/core/Grid";

const useStyles = makeStyles(theme => ({
  alignselfcenter: { alignSelf: "center" }
}));
const Form = ({ onInputChange, message, sendMessage }) => {
  const classes = useStyles();
  return (
    <Grid container>
      <Grid item md={10}>
        <TextField
          id="filled-full-width"
          fullWidth
          margin="normal"
          variant="filled"
          value={message}
          onChange={ev => onInputChange(ev)}
          onKeyPress={ev => (ev.key === "Enter" ? sendMessage(ev) : null)}
        />
      </Grid>
      <Grid item md={2} className={classes.alignselfcenter}>
        <Button
          variant="contained"
          color="primary"
          className={classes.button}
          endIcon={<Icon>send</Icon>}
          size="large"
          onClick={ev => {
            sendMessage(ev);
          }}
        >
          Send
        </Button>
      </Grid>
    </Grid>
  );
};

export default Form;
