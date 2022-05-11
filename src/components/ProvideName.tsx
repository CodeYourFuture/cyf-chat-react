import { Button, Input } from '@chakra-ui/react'
import React, { useRef } from 'react'

interface Props {
  setUser: (user: string) => void
}

const ProvideName = ({ setUser }:Props):JSX.Element => {
  const inputRef = useRef<HTMLInputElement>(null);
  const setUserHandler = (e: React.MouseEvent<HTMLButtonElement>) => {
    if (inputRef.current?.value) {
      setUser(inputRef.current?.value);
      localStorage.setItem('user', inputRef.current?.value);
    } else {
      alert('Please provide a valid name')
    }
  }
  return (
      <>
        <Input role='enter-username' ref={inputRef} w='60%' size='lg' variant='flushed' min='3' placeholder='Please provide your name to start using the chat app'/>
        <Button onClick={setUserHandler}>Start Chatting</Button>
      </>
  )
}

export default ProvideName