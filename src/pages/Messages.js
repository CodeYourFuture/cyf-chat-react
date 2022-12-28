import React, { useEffect, useState } from "react";
import { Link as ReachLink } from "react-router-dom";
import {
  ChakraProvider,
  Card,
  CardHeader,
  CardBody,
  Heading,
  Stack,
  Avatar,
  Flex,
  Spacer,
  IconButton,
  InputGroup,
  InputRightAddon,
  Input,
  Text,
  Link,
} from "@chakra-ui/react";
import { SearchIcon, DeleteIcon } from "@chakra-ui/icons";

function Messages() {
  const [messages, setMessages] = useState([]);
  const [searchValue, setSearchValue] = useState("");
  const [notFoundMsg, setNotFoundMsg] = useState("");

  useEffect(() => {
    const interval = setInterval(() => {
      fetch("https://saadiaelf-chat-server.glitch.me/messages/latest")
        .then((res) => res.json())
        .then((data) => setMessages(data), setNotFoundMsg(""));
    }, 3000);
    return () => clearInterval(interval);
  }, [messages]);

  function deleteMessage(e) {
    let msgId = e.target.value;
    fetch(`https://saadiaelf-chat-server.glitch.me/messages/${msgId}`, {
      method: "DELETE",
    }).then(console.log("Message successfully deleted"));
  }

  function search() {
    if (searchValue) {
      fetch(
        `https://saadiaelf-chat-server.glitch.me/messages/search?text=${searchValue}`
      )
        .then((res) => {
          if (res.status >= 200 && res.status <= 299) {
            return res.json();
          } else {
            throw Error(res.statusText);
          }
        })
        .then((data) => {
          setMessages(data);
          setNotFoundMsg("");
        })
        .catch((error) => {
          setMessages([]);
          setNotFoundMsg("No Matching results");
          console.log(error);
        });
    }
  }

  return (
    <ChakraProvider>
      <Heading size="xl" textAlign="center" m="4">
        Messages
      </Heading>
      <InputGroup justifyContent="center">
        <Input
          placeholder="search"
          width="auto"
          onChange={(e) => setSearchValue(e.target.value)}
        />
        <InputRightAddon
          children={
            <IconButton
              aria-label="Search"
              icon={<SearchIcon />}
              onClick={search}
            />
          }
        />
      </InputGroup>
      <Stack spacing={5} alignItems="center" m="4">
        <Link color="red.600" as={ReachLink} to="/">
          Home
        </Link>
        <Text>{notFoundMsg}</Text>
        {messages.map((msg, i) => (
          <Card
            key={i}
            size="sm"
            width={["sm", "md", "lg", "xl", "2xl"]}
            backgroundColor="gray.50"
          >
            <CardHeader>
              <Flex>
                <Avatar name={msg.from} mr="5"></Avatar>
                <Heading size="lg" lineHeight="-10px">
                  {msg.from}
                </Heading>
                <Spacer />
                <IconButton
                  value={msg.id}
                  alignSelf="end"
                  variant="outline"
                  colorScheme="red"
                  aria-label="delete message"
                  icon={<DeleteIcon />}
                  onClick={(e) => deleteMessage(e)}
                />
              </Flex>
            </CardHeader>
            <CardBody>{msg.text}</CardBody>
          </Card>
        ))}
      </Stack>
    </ChakraProvider>
  );
}

export default Messages;
