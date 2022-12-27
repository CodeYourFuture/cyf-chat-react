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
} from "@chakra-ui/react";
import { DeleteIcon } from "@chakra-ui/icons";

function Messages() {
  const [messages, setMessages] = useState([]);
  useEffect(() => {
    fetch("https://saadiaelf-chat-server.glitch.me/messages/latest").then(
      (res) => res.json().then((data) => setMessages(data))
    );
  }, [messages]);

  function deleteMessage(e) {
    let msgId = e.target.value;
    fetch(`https://saadiaelf-chat-server.glitch.me/messages/${msgId}`, {
      method: "DELETE",
    }).then(console.log("Message successfully deleted"));
  }
  return (
    <ChakraProvider>
      <Heading size="xl" textAlign="center">
        Messages
      </Heading>
      <Stack spacing={5} alignItems="center">
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
