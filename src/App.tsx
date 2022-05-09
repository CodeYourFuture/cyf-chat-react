import { useState, useEffect } from 'react';
import {
  ChakraProvider,
  theme,
  VStack,
} from '@chakra-ui/react';
import Header from './components/Header';
import MessagingApp from './MessagingApp';
import ProvideName from './components/ProvideName';

const App = () => {
  const [user, setUser] = useState<string>('');
  useEffect(() => {
    const username = localStorage.getItem('user');
    if (username) {
      setUser(username);
    }
  }, [])
  return (
  <ChakraProvider theme={theme}>
    <VStack w='100%' p='4' minH='100vh'>
      <Header />
      {user ? <MessagingApp user={user} /> : <ProvideName setUser={setUser}/>}
    </VStack>
  </ChakraProvider>
  );
}

export default App;
