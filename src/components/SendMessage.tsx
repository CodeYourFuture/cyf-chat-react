import { Button, Textarea, VStack } from '@chakra-ui/react';
import React, { ChangeEvent, useState } from 'react'
import { API_URL } from '../config';

type Props = {
  user: string
}

const SendMessage = ({ user }: Props) => {
  const [messageText, setMessageText] = useState<string>('');
  
  const setMessageTextHandler = (e:ChangeEvent<HTMLTextAreaElement>):void => {
    setMessageText(e.target.value);
  }
  
  const sendMessage = () => {
    fetch(`${API_URL}/messages`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        from: user,
        text: messageText,
      }),
    }).then(res => {
      if (res.ok) {
        console.log(res)
      }
    });
  }

  return (
    <VStack w='100%'>
      <Textarea placeholder='Type your message here' w='80%' value={messageText} onChange={setMessageTextHandler}></Textarea>
      <Button onClick={sendMessage}>Send</Button>
    </VStack>
  )
}

export default SendMessage