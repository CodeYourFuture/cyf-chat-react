import React from "react";
import { useEffect, useState } from "react";
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
  Center,
} from "@chakra-ui/react";
import { SearchIcon, DeleteIcon } from "@chakra-ui/icons";

function Messages() {
  const [messages, setMessages] = useState([]);
  useEffect(() => {
    const interval = setInterval(() => {
      fetch("https://saadiaelf-chat-server.glitch.me/messages/latest").then(
        (res) => res.json().then((data) => setMessages(data))
      );
    }, 30000);
    return () => clearInterval(interval);
  }, [messages]);

  function deleteMessage(e) {
    let msgId = e.target.value;
    fetch(`https://saadiaelf-chat-server.glitch.me/messages/${msgId}`, {
      method: "DELETE",
    }).then(console.log("Message successfully deleted"));
  }
  return (
    <ChakraProvider>
      <Heading size="xl" textAlign="center" m="4">
        Messages
      </Heading>
      <InputGroup justifyContent="center">
        <Input placeholder="search" width="auto" />
        <InputRightAddon
          children={<IconButton aria-label="Search" icon={<SearchIcon />} />}
        />
      </InputGroup>
      <Stack spacing={5} alignItems="center" mt="4">
        {messages.map((msg, i) => (
          <Card key={i} size="sm" minW="2xl" backgroundColor="gray.50">
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
