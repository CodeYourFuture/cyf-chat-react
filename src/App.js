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
} from "@chakra-ui/react";
import "./App.css";

function App() {
  return (
    <ChakraProvider>
      <Center>
        <Card
          m="4"
          width="lg"
          direction={{ base: "column", sm: "row" }}
          overflow="hidden"
          variant="outline"
        >
          <Image
            objectFit="cover"
            maxW={{ base: "100%", sm: "200px" }}
            src="https://images.pexels.com/photos/1111369/pexels-photo-1111369.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2"
            alt="Pink Background With Speech Bubble"
          />
          <CardBody>
            <CardHeader>
              <Heading size="md">CYF Chat</Heading>
            </CardHeader>
          </CardBody>
        </Card>
      </Center>
    </ChakraProvider>
  );
}

export default App;
