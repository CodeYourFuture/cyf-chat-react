import React from "react";
import { useEffect, useState } from "react";
import {
  ChakraProvider,
  Card,
  CardHeader,
  CardBody,
  CardFooter,
  Heading,
  Stack,
  Button,
  Avatar,
  HStack,
} from "@chakra-ui/react";

function Messages() {
  const [messages, setMessages] = useState([]);
  useEffect(() => {
    fetch("https://saadiaelf-chat-server.glitch.me/messages/latest").then(
      (res) => res.json().then((data) => setMessages(data))
    );
  }, []);

  console.log(messages);
  return (
    <ChakraProvider>
      <Heading size="xl" textAlign="center">
        Messages
      </Heading>
      <Stack spacing={5} alignItems="center">
        {messages.map((msg, i) => (
          <Card key={i} size="sm" minW="2xl" backgroundColor="gray.50">
            <CardHeader>
              <HStack spacing={3}>
                <Avatar name={msg.from}></Avatar>
                <Heading size="lg"> {msg.from}</Heading>
              </HStack>
            </CardHeader>
            <CardBody>{msg.text}</CardBody>
            <CardFooter justifyContent="end">
              <Button size="sm" colorScheme="red">
                Delete
              </Button>
            </CardFooter>
          </Card>
        ))}
      </Stack>
    </ChakraProvider>
  );
}

export default Messages;
