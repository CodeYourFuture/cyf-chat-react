import React from "react";
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
} from "@chakra-ui/react";

import { AtSignIcon } from "@chakra-ui/icons";
import "./App.css";

function App() {
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
              <Heading size="md">CYF Chat</Heading>
            </CardHeader>
            <Stack pl="5" spacing={3}>
              <InputGroup>
                <InputLeftElement
                  pointerEvents="none"
                  children={<AtSignIcon color="gray.300" />}
                />
                <Input type="text" placeholder="Username" />
              </InputGroup>
              <Textarea placeholder="Add message" size="sm" />
              <Button colorScheme="blue">Post Message</Button>
            </Stack>
          </CardBody>
        </Card>
      </Center>
    </ChakraProvider>
  );
}

export default App;
