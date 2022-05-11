import React from 'react';
import {
  Button,
  Box,
  Tooltip,
  Flex,
  Spinner,
  useColorModeValue,
  VStack,
  Text,
  Avatar,
  ChakraProps,
} from '@chakra-ui/react';
import useMessageFetcher from '../hooks/useMessageFetcher';
import TMessage from '../types/message';
import SendMessage from './SendMessage';

interface IDisplayMessage {
  user: string;
  logout: () => void;
}

const DisplayMessages = ({ user, logout }: IDisplayMessage): JSX.Element => {
  const bgColor = useColorModeValue('gray.200', 'gray.600');
  const { messages, loading, triggerFetch } = useMessageFetcher();
  const messagingAppBoxStyle = {
    overflowY: 'auto',
    p: '2',
    bgColor,
    mt: '8',
    borderRadius: '3xl',
    shadow: 'xl',
    minW: ['80vw', '70vw'],
    h: '60vh',
  } as ChakraProps;
  return (
    <VStack role='message-box'>
      <Button onClick={triggerFetch}>
        {loading ? <Spinner /> : 'Refresh'}
      </Button>
      <Flex {...messagingAppBoxStyle} flexDirection="column-reverse" pb='5'>
        {messages?.length > 0 &&
          messages.map((message, i) => (
            <Message key={i} message={message} user={user} />
          ))}
      </Flex>
      <SendMessage user={user} triggerFetch={triggerFetch} />
      <Text>
        Logged in as: {user} -{' '}
        <Box as="span" onClick={logout} cursor='pointer'>
          Logout
        </Box>
      </Text>
    </VStack>
  );
};

export default DisplayMessages;

type MessageProps = {
  message: TMessage;
  user: string;
};

const Message = ({ message, user }: MessageProps): JSX.Element => {
  const bgColorOtherUser = useColorModeValue('gray.400', 'gray.800');
  const bgColorCurrentUser = useColorModeValue('teal.400', 'teal.800');
  const bgColor =
    user !== message?.from ? bgColorCurrentUser : bgColorOtherUser;
  return (
    <Flex
      w="100%"
      flexDirection={user === message.from ? 'row-reverse' : 'row'}
      mt="2"
    >
      <Tooltip label={message.from}>
        <Avatar name={message.from[0]} shadow="lg" mx="1.5" size="md" />
      </Tooltip>
      <Text bgColor={bgColor} px="2" py="0.5" borderRadius="10px">
        {message.text}
      </Text>
    </Flex>
  );
};
