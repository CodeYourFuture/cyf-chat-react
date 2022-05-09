import React from 'react'
import { Center } from '@chakra-ui/react'
import DisplayMessages from './components/DisplayMessages'

interface Props {
  user: string
}

const MessagingApp = ({ user }: Props): JSX.Element => {
  return (
    <Center>
        <DisplayMessages />
    </Center>
  )
}

export default MessagingApp