import { useEffect, useState } from "react";
import {
  ChakraProvider,
  Card,
  CardHeader,
  CardBody,
  CardFooter,
  Heading,
  Image,
  Center,
  Stack,
  Input,
  InputGroup,
  InputLeftElement,
  Textarea,
  Button,
  Avatar,
  HStack,
} from "@chakra-ui/react";

import { AtSignIcon } from "@chakra-ui/icons";
import "./App.css";

function App() {
  const [messages, setMessages] = useState([]);
  useEffect(() => {
    fetch("https://saadiaelf-chat-server.glitch.me/messages/latest").then(
      (res) => res.json().then((data) => setMessages(data))
    );
  }, []);

  console.log(messages);
  return (
    <ChakraProvider>
      <Center>
        <Card
          size="lg"
          width="5xl"
          m="4"
          direction={{ base: "column", sm: "row" }}
          overflow="hidden"
          variant="outline"
        >
          <Image
            objectFit="cover"
            maxW={{ base: "100%", sm: "500px" }}
            src="https://images.pexels.com/photos/1111369/pexels-photo-1111369.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2"
            alt="Pink Background With Speech Bubble"
          />
          <CardBody>
            <CardHeader>
              <Heading size="xl">CYF Chat</Heading>
            </CardHeader>
            <Stack pl="5" spacing={3}>
              <InputGroup>
                <InputLeftElement
                  pointerEvents="none"
                  children={<AtSignIcon color="gray.300" />}
                />
                <Input name="from" type="text" placeholder="Username" />
              </InputGroup>
              <Textarea name="text" placeholder="Add message" size="sm" />
              <Button colorScheme="blue">Post Message</Button>
            </Stack>
          </CardBody>
        </Card>
      </Center>
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

export default App;
