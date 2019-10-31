import React from "react";
import { List, Box } from "@material-ui/core";
import Room from "./Room";
import { withRouter } from "react-router";

const Rooms = ({ rooms, currentRoom, changeRoom, users, history }) => {
  const [selectedIndex, setSelectedIndex] = React.useState(0);

  const handleListItemClick = (event, index) => {
    event.preventDefault();

    // let currentUrlParams = new URLSearchParams(window.location.search);
    // currentUrlParams.set("room", rooms[index].toLowerCase());
    // history.push(window.location.pathname + "?" + currentUrlParams.toString());
    changeRoom(rooms[index].toLowerCase());
    setSelectedIndex(index);
  };
  return (
    <List>
      {rooms.map((room, i) => {
        return (
          <Box key={i}>
            <Room
              roomName={room}
              currentRoom={currentRoom}
              index={i}
              users={users}
              selectedIndex={selectedIndex}
              handleListItemClick={handleListItemClick}
            />
          </Box>
        );
      })}
    </List>
  );
};

// export default withRouter(Rooms);
export default Rooms;
