import React, { useState } from "react";
import { Link as ReachLink } from "react-router-dom";
import {
  ChakraProvider,
  Card,
  CardHeader,
  CardBody,
  Link,
  Heading,
  Image,
  Center,
  Stack,
  Input,
  InputGroup,
  InputLeftElement,
  Textarea,
  Button,
  FormControl,
  FormLabel,
} from "@chakra-ui/react";
import { AtSignIcon } from "@chakra-ui/icons";

function Home() {
  const [userData, setUserData] = useState({
    from: "",
    text: "",
  });

  // Handle inputs change
  function handleInputChange(event) {
    const updatedUserData = {
      ...userData,
      [event.target.name]: event.target.value,
    };
    setUserData(updatedUserData);
  }

  // Create new message to API
  function createMessage(e) {
    if (userData.from && userData.text) {
      fetch(`https://saadiaelf-chat-server.glitch.me/messages`, {
        method: "POST",
        body: JSON.stringify(userData),
        headers: {
          "Content-Type": "application/json",
        },
      })
        .then((response) => response.json())
        .then((data) => {
          console.log("Success:", data);
        })
        .catch((error) => {
          console.error("Error:", error);
        });
    } else {
      e.preventDefault();
    }
  }
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
            <FormControl isRequired>
              <Stack pl="5" spacing={2}>
                <FormLabel>Username</FormLabel>
                <InputGroup>
                  <InputLeftElement
                    pointerEvents="none"
                    children={<AtSignIcon color="gray.300" />}
                  />
                  <Input
                    name="from"
                    type="text"
                    placeholder="Username"
                    onChange={handleInputChange}
                  />
                </InputGroup>
                <FormLabel>Message</FormLabel>
                <Textarea
                  name="text"
                  placeholder="Add message"
                  size="sm"
                  onChange={handleInputChange}
                />
                <Center>
                  <Link as={ReachLink} to="/messages">
                    <Button
                      colorScheme="pink"
                      type="submit"
                      onClick={createMessage}
                    >
                      Post Message
                    </Button>
                  </Link>
                </Center>
              </Stack>
            </FormControl>

            <Link color="red.600" as={ReachLink} to="/messages">
              View latest messages
            </Link>
          </CardBody>
        </Card>
      </Center>
    </ChakraProvider>
  );
}

export default Home;
