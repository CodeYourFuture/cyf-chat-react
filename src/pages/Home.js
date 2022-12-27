import React from "react";
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
} from "@chakra-ui/react";
import { AtSignIcon } from "@chakra-ui/icons";

function Home() {
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
              <Link color='red.600' as={ReachLink} to="/messages">
                View latest messages
              </Link>
            </Stack>
          </CardBody>
        </Card>
      </Center>
    </ChakraProvider>
  );
}

export default Home;
