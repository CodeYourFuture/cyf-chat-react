import { Button, Spinner, Textarea, VStack } from '@chakra-ui/react';
import React, { ChangeEvent, useState } from 'react'
import { API_URL } from '../config';

type Props = {
  user: string
  triggerFetch: () => void
}

const SendMessage = ({ user, triggerFetch }: Props):JSX.Element => {
  const [messageText, setMessageText] = useState<string>('');
  const [loading, setLoading] = useState<boolean>(false);
  
  const setMessageTextHandler = (e:ChangeEvent<HTMLTextAreaElement>):void => {
    setMessageText(e.target.value);
  }
  
  const sendMessage = () => {
    setLoading(true);
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
        triggerFetch();
        setMessageText('');
        setLoading(false);
      }
    }).catch(err => {
      setLoading(false);
      console.log(err);
    })
  }

  return (
    <VStack w='100%'>
      <Textarea placeholder='Type your message here' w='80%' value={messageText} onChange={setMessageTextHandler}></Textarea>
      <Button onClick={sendMessage}>{loading ? <Spinner /> : 'Send'}</Button>
    </VStack>
  )
}

export default SendMessage