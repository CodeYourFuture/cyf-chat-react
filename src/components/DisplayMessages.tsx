import { Box, Button, HStack, Spinner, useColorModeValue, VStack } from '@chakra-ui/react'
import React from 'react'
import useMessageFetcher from '../hooks/useMessageFetcher';

const DisplayMessages = () => {
  const bgColor = useColorModeValue('gray.200', 'gray.600');
  const { messages, loading, error, triggerFetch } = useMessageFetcher();
  return (
      <VStack>
        <Box bgColor={bgColor} mt='8' borderRadius='3xl' shadow='xl' minW={['80vw', '70vw']} minH='60vh'>
                        
        </Box>
        <Button onClick={triggerFetch}>
            {loading ? <Spinner /> : 'Refresh'}
        </Button>
      </VStack>
  )
}

export default DisplayMessages