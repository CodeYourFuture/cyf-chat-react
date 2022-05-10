import React from 'react'
import { Center } from '@chakra-ui/react'
import DisplayMessages from './components/DisplayMessages'

interface Props {
  user: string
}

const MessagingApp = ({ user }: Props): JSX.Element => {
  return (
    <Center>
        <DisplayMessages user={user}/>
    </Center>
  )
}

export default MessagingApp