import React, { useState, useEffect, useRef } from "react";
import io from "socket.io-client";
import queryString from "query-string";
import Container from "@material-ui/core/Container";
import Grid from "@material-ui/core/Grid";
import Form from "../components/Form";
import Rooms from "./Rooms";
import Messages from "./Messages";
import axios from "axios";
import Header from "../components/Header";

let socket;

const usePrevious = value => {
  const ref = useRef();
  useEffect(() => {
    ref.current = value;
  });
  return ref.current;
};

const Chat = ({ location }) => {
  const [name, setName] = useState("");
  const [room, setRoom] = useState("main");
  const [avatar, setAvatar] = useState(0);
  const [rooms, setRooms] = useState([]);
  const [users, setUsers] = useState("");
  const [message, setMessage] = useState("");
  const [messages, setMessages] = useState([]);
  const [fetchCounter, setFetchCounter] = useState(1);
  const [searchMessagesResult, setSearchMessagesResult] = useState([]);

  const prevRoom = usePrevious(room);

  const ENDPOINT = "localhost:3005";
  const ROOMS = [
    "Main",
    "Chill",
    "Evening",
    "placeholder",
    "placeholder1",
    "placeholder2"
  ];

  useEffect(() => {
    const { name, avatar } = queryString.parse(location.search);
    socket = io(ENDPOINT);
    setName(name);
    setRooms(ROOMS);
    setAvatar(avatar);

    socket.emit("join", { name, avatar, room }, error => {
      console.log("emmited", name, avatar, room);
      console.log(error);
    });

    // Database fetch
    fetchMessages("main");

    return () => {
      socket.emit("disconnect");
      socket.off();
    };
  }, [ENDPOINT, location.search]);

  useEffect(() => {
    console.log("inside message Effect");

    socket.on("message", message => {
      setMessages([...messages, message]);
    });

    socket.on("roomData", ({ users }) => {
      setUsers(users);
    });

    return () => {
      socket.emit("disconnect");

      socket.off();
    };
  }, [messages]);

  useEffect(() => {
    console.log("inside room effect");

    if (room === "main") {
      console.log(room, prevRoom);
      if (
        ROOMS.map(e => {
          return e.toLowerCase();
        }).includes(prevRoom)
      ) {
        socket.emit("CHANGE_ROOM", { room }, error => {
          console.log(error);
        });
      } else {
        return;
      }
    } else {
      socket.emit("CHANGE_ROOM", { room }, error => {
        console.log(error);
      });
    }

    return () => {
      socket.emit("disconnect");

      socket.off();
    };
  }, [room]);

  //function for sending message
  const sendMessage = async ev => {
    ev.preventDefault();
    if (message) {
      socket.emit("SEND_MESSAGE", message, () => {
        setMessage("");
      });

      let mess = { name, avatar, message, room, date: Date.now };
      const response = await axios.post(`http://localhost:3005/messages`, mess);
      console.log("Added: this is response", response);
    }
    fetchMessages(room);
  };

  const changeRoom = Room => {
    console.log(room, Room);
    if (room === Room) {
      console.log("Same room , reutrinig");
      return;
    }
    fetchMessages(Room);
    setRoom(Room);
  };

  const searchMessages = async value => {
    const response = await axios.get(
      `http://localhost:3005/messages/search/${value}`
    );

    console.log(response);
    setSearchMessagesResult(response.data);
  };

  const fetchMessages = async room => {
    const response = await axios.get(
      `http://localhost:3005/messages/rooms/${room}`
    );
    setMessages(response.data);
  };

  const deleteMessage = async id => {
    const response = await axios.delete(
      `http://localhost:3005/messages/id/${id}`
    );
    console.log("This is response of delete ", response);

    //Create copy of messages and filter out the deleted message
    let copyMess = [...messages];
    setMessages(copyMess.filter(e => e._id !== id));
  };

  const editMessage = async (id, message) => {
    const response = await axios.put(
      `http://localhost:3005/messages/id/${id}`,
      {
        message
      }
    );

    console.log("Response from editmessage", response);

    //Create copy of messages and edit the state
    let copyMess = [...messages];
    let editedMess = copyMess.find(e => e._id === id);
    editedMess.message = message;
    let editedMessIndex = copyMess.findIndex(e => e._id === id);
    setMessages(copyMess.splice(editedMessIndex, 1, editMessage));
  };

  return (
    <div className="App">
      <Container>
        <Grid container>
          <Grid item md={12}>
            <Header
              searchMessages={e => {
                e.preventDefault();
                searchMessages(e.target.value);
              }}
              searchMessagesResult={searchMessagesResult}
            />
          </Grid>
          <Grid item md={2} className="mt-2">
            <Rooms rooms={rooms} changeRoom={changeRoom} />
          </Grid>
          <Grid item md={10}>
            <div className="container-fluid">
              <div className="row">
                <div
                  className="col-md-12 mt-3 "
                  style={{ height: "73vh", paddingRight: "0px" }}
                >
                  <Messages
                    messages={messages}
                    name={name}
                    onDelete={deleteMessage}
                    onEdit={editMessage}
                  />
                </div>
              </div>
              <div className="row">
                <div className="col-md-12">
                  <Form
                    onInputChange={e => {
                      setMessage(e.target.value);
                    }}
                    message={message}
                    sendMessage={ev => {
                      sendMessage(ev);
                    }}
                  />
                </div>
              </div>
            </div>
          </Grid>
        </Grid>
      </Container>
    </div>
  );
};

export default Chat;

// constructor(props) {
//   super(props);

//   this.state = {
//     username: queryString.parse(props.location.search),
//     message: "",
//     messages: []
//   };

//   this.socket = io("localhost:3005");

//   this.sendMessage = ev => {
//     ev.preventDefault();
//     this.socket.emit("SEND_MESSAGE", {
//       author: this.state.username.name,
//       message: this.state.message
//     });
//     this.setState({ message: "" });
//   };

//   this.socket.on("RECEIVE_MESSAGE", function(data) {
//     addMessage(data);
//   });

//   const addMessage = data => {
//     console.log(data);
//     this.setState({ messages: [...this.state.messages, data] });
//     console.log(this.state.messages);
//   };
// }
