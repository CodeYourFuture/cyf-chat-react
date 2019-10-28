import React, { useState } from "react";
import { Link } from "react-router-dom";
import Typography from "@material-ui/core/Typography";
import Divider from "@material-ui/core/Divider";
import Container from "@material-ui/core/Container";
import TextField from "@material-ui/core/TextField";
import Box from "@material-ui/core/Box";
import Button from "@material-ui/core/Button";
import SelectAvatar from "./SelectAvatar";

const Join = () => {
  const defaultProps = {
    borderColor: "#1985A1",
    m: 5,
    border: 3
  };
  const [username, setUsername] = useState("");
  const [avatar, setAvatar] = useState(0);

  return (
    <Container
      maxWidth="sm"
      className="d-flex flex-column justify-content-center vh-100"
    >
      <Box borderRadius={16} {...defaultProps}>
        <Box className="text-center">
          <Typography variant="h1">Join</Typography>
        </Box>

        <Divider variant="middle" />
        <Box className="text-center">
          <TextField
            label="Username"
            value={username}
            onChange={e => {
              setUsername(e.target.value);
            }}
            margin="normal"
          />
        </Box>
        <Box className="text-center pt-2">
          <SelectAvatar
            onAvtClick={avt => {
              setAvatar(avt);
            }}
          />
        </Box>
        <Box className="text-center pt-2 pb-2">
          <Link
            onClick={e => (!username ? e.preventDefault() : null)}
            to={`/chat?name=${username}&avatar=${avatar}`}
          >
            <Button variant="contained" color="primary">
              Go
            </Button>
          </Link>
        </Box>
      </Box>
    </Container>
  );
};

export default Join;
